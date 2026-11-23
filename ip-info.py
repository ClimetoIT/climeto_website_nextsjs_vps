"""Look up public IP geolocation from ip-api.com.

Usage:
  python ip-info.py
  python ip-info.py 8.8.8.8
"""

import ipaddress
import json
import os
import re
import sys
import urllib.error
import urllib.request

API_URL = "http://ip-api.com/json/{query}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,org,as,query"
IP_OR_HOST = re.compile(r"^[A-Za-z0-9:.\-]{1,253}$")
FIELDS = (
    ("Country", "country"),
    ("Country code", "countryCode"),
    ("Region", "region"),
    ("Region name", "regionName"),
    ("City", "city"),
    ("Zip code", "zip"),
    ("Timezone", "timezone"),
    ("Org", "org"),
    ("AS", "as"),
    ("Latitude", "lat"),
    ("Longitude", "lon"),
)


def clear_screen():
    os.system("cls" if os.name == "nt" else "clear")


def reject_local_address(query):
    try:
        ip = ipaddress.ip_address(query)
    except ValueError:
        return
    if ip.is_private or ip.is_loopback or ip.is_link_local or ip.is_reserved:
        raise ValueError(
            f"{query} is a local network address. It stays inside your Wi-Fi or router, "
            "so it has no country or city. Enter the public IP from your ISP instead."
        )


def lookup(query):
    query = query.strip()
    if not query or not IP_OR_HOST.match(query):
        raise ValueError("Enter a public IP address or domain name.")
    reject_local_address(query)

    request = urllib.request.Request(
        API_URL.format(query=urllib.request.quote(query)),
        headers={"User-Agent": "climeto-ip-info"},
    )
    try:
        with urllib.request.urlopen(request, timeout=15) as response:
            payload = json.load(response)
    except urllib.error.HTTPError as error:
        raise RuntimeError(f"Lookup failed with HTTP {error.code}.") from error
    except urllib.error.URLError as error:
        raise RuntimeError(f"Could not reach ip-api.com: {error.reason}") from error

    if payload.get("status") != "success":
        message = payload.get("message") or "lookup failed"
        raise ValueError(f"Invalid query: {message}")
    return payload


def print_result(query, info):
    print("----------------------------------")
    print(f"Query: {info.get('query') or query}")
    print("----------------------------------")
    for label, key in FIELDS:
        value = info.get(key)
        print(f"{label}: {value if value not in (None, '') else '-'}")
    print("----------------------------------")
    print("City and coordinates are approximate network locations, not a street address.")


def main(argv):
    if len(argv) > 1:
        query = " ".join(argv[1:]).strip()
        try:
            print_result(query, lookup(query))
        except (ValueError, RuntimeError) as error:
            print(error)
            return 1
        return 0

    clear_screen()
    print("IP info")
    print("Look up a public IP or domain. Type q to quit.")
    print()

    while True:
        try:
            query = input("Enter the IP --> : ").strip()
        except (EOFError, KeyboardInterrupt):
            print()
            return 0

        if query.lower() in {"q", "quit", "exit"}:
            return 0
        if not query:
            continue

        try:
            print_result(query, lookup(query))
        except (ValueError, RuntimeError) as error:
            print(error)
        print()


if __name__ == "__main__":
    try:
        raise SystemExit(main(sys.argv))
    except KeyboardInterrupt:
        print()
        raise SystemExit(0)
