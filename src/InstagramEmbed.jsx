import { useEffect } from "react";

const InstagramEmbed = ({ postUrl, className = "" }) => {
  useEffect(() => {
    // Check if the script is already added
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        window.instgrm.Embeds.process();
      };
    } else {
      // If script already loaded, just process the embeds
      window.instgrm.Embeds.process();
    }
  }, [postUrl]);

  return (
    <div className={className}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
        style={{ width: "100%", margin: "0 auto" }}
      ></blockquote>
    </div>
  );
};

export default InstagramEmbed;
