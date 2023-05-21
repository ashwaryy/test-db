import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
function createToken() {
  const user = "anagar@genproinc.com";
  const connectedAppClientId = "2902df24-7f1d-41bc-833e-cb3b5327c548";
  const connectedAppSecretKey = "sVApvzGD3kRW2tj61+aXijrN0sqIv9Lo6LsA6KmikyQ=";
  const connectedAppSecretId = "7052a6ea-7965-4214-bd91-370b08550c79";

  const payload = {
    iss: connectedAppClientId,
    exp: Math.floor(Date.now() / 1000) + 5 * 60, // 5 minutes
    jti: uuidv4(),
    aud: "tableau",
    sub: user,
    scp: ["tableau:views:embed", "tableau:metrics:embed"],
    Region: "East",
  };

  const headers = {
    kid: connectedAppSecretId,
    iss: connectedAppClientId,
  };

  const token = jwt.sign(payload, connectedAppSecretKey, { algorithm: "HS256", header: headers });

  return token;
}

console.log(createToken());
