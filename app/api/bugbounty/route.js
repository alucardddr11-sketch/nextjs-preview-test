export async function GET(request) {
  return new Response(JSON.stringify({
    status: "vulnerability_test_successful",
    message: "External fork PR triggered code execution",
    secret_check: process.env.TEST_SECRET_KEY || "No Secret Found (Safe)"
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
