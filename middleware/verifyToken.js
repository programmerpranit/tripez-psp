import { verify } from "jsonwebtoken";

export const verifyPartner = (req) => {
  try {
    const { authorization } = req.headers;

    const bearer = authorization.split(" ");
    const token = bearer[1];

    const partner = verify(token, process.env.PARTNER_SEC);

    if (!partner.partner.verified) {
      return null;
    } else {
      return partner;
    }
  } catch (error) {
    return null;
  }
};
