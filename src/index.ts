import {
  IAuth,
  IAuthBuyerMessageDetails,
  IAuthDocument,
  IAuthPayload,
  IAuthResponse,
  IAuthUser,
  IEmailMessageDetails,
  IForgotPassword,
  IReduxAddAuthUser,
  IReduxAuthPayload,
  IReduxLogout,
  IResetPassword,
  ISignInPayload,
  ISignUpPayload,
} from "./interfaces/auth.interface";

import { IBuyerDocument, IReduxBuyer } from "./interfaces/buyer.interface";

import {
  IChatBoxProps,
  IChatBuyerProps,
  IChatMessageProps,
  IChatSellerProps,
  IConversationDocument,
  IMessageDetails,
  IMessageDocument,
} from "./interfaces/chat.interface";

import { IEmailLocals } from "./interfaces/email.interface";

import {
  GigType,
  ICreateGig,
  IGigCardItems,
  IGigContext,
  IGigInfo,
  IGigTopProps,
  IGigViewReviewsProps,
  IGigsProps,
  ISelectedBudget,
  ISellerGig,
} from "./interfaces/gig.interface";

import {
  IDeliveredWork,
  IExtendedDelivery,
  IOffer,
  IOrderDocument,
} from "./interfaces/order.interface";

import {
  IRatingCategories,
  IRatingCategoryItem,
  IRatingTypes,
  IReviewDocument,
  IReviewMessageDetails,
} from "./interfaces/review.interface";

import {
  IHitsTotal,
  IPaginateProps,
  IQueryList,
  IQueryString,
  ISearchResult,
  ITerm,
} from "./interfaces/search.interface";

import {
  ICertificate,
  IEducation,
  IExperience,
  ILanguage,
  ISellerDocument,
  SellerType,
} from "./interfaces/seller.interface";

import { uploads, videoUpload } from "./cloudinary-uploads";
import {
  BadRequestError,
  CustomError,
  ErrnoException,
  FileTooLargeError,
  IError,
  IErrorResponse,
  NotAuthorizedError,
  NotFoundError,
  ServerError,
} from "./error-handlers";

import { verifyGatewayRequest } from "./gateway-middleware";

import {
  toUpperCase,
  firstLetterUppercase,
  isDataURL,
  isEmail,
  lowerCase,
} from "./helpers";

import { winstonLogger } from "./logger";
