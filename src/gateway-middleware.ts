import { NextFunction, Request, Response } from "express";
import { NotAuthorizedError } from "./error-handlers";
import jwt from "jsonwebtoken";

// In Prod, might use a key instead of name of service
const tokens: string[] = [
  "auth",
  "seller",
  "search",
  "buyer",
  "message",
  "order",
  "review",
];

export function verifyGatewayRequest(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const token: string = req.headers?.gatewayToken as string;
  if (!token) {
    throw new NotAuthorizedError(
      "Invalid request",
      "verifyGatewayRequest(), method: Request not coming from API Gateway",
    );
  }

  try {
    // TODO: Add secret
    const payload: { id: string; iat: number } = jwt.verify(token, "") as {
      id: string;
      iat: number;
    };
    if (!tokens.includes(payload.id)) {
      throw new NotAuthorizedError(
        "Invalid request",
        "verifyGatewayRequest(), method: Request payload id invalid.",
      );
    }
  } catch (e) {
    throw new NotAuthorizedError(
      "Invalid request",
      "verifyGatewayRequest(), method: Request not coming from API Gateway",
    );
  }
}
