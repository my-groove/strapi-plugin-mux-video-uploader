import * as strategies from '@strapi/admin/server/strategies';

export default async (ctx: any) => {
  const user = await strategies.admin.authenticate(ctx);

  if (user.authenticated) {
    return true;
  } else {
    const api = await strategies['api-token'].authenticate(ctx);

    return api.authenticated;
  }
};
