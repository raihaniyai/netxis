export const ServiceEndpoint = params => `https://netxis-server.azurewebsites.net/${params}/service`;
export const CompanyEndpoint = params => `https://netxis-server.azurewebsites.net/${params}/company`;
export const ProductEndpoint = params => `https://netxis-server.azurewebsites.net/${params}/product`;
export const UserEndpoint = params => `https://netxis-server.azurewebsites.net/${params}/user`;
export const NewsEndpoint = params => `localhost:5000/${params}/news`;
export const OrderEndpoint = params => `https://netxis-server.azurewebsites.net/${params}/order`;
export const CouponPlanEndpoint = (userID, planID) => `https://netxis-server.azurewebsites.net/${userID}/${planID}/coupon_plan`;
