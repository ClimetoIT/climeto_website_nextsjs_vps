import { POST as analyticsPost } from "../analytics/route";

export async function POST(request) {
  return analyticsPost(request);
}
