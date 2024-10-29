import adminRoutes from './admin';
import clientRoutes from './client';

const routes = {
  admin: {
    type: 'admin',
    routes: adminRoutes,
  },
  'content-api': {
    type: 'content-api',
    routes: [
      ...clientRoutes,
      {
        method: 'POST',
        path: '/mux-video-uploader/mux-assets',
        handler: 'mux-asset.createBulk',
        config: {
          description: 'Create multiple MuxAssets',
          policies: [],
          prefix: false,
          auth: false,
        },
      },
      {
        method: 'POST',
        path: '/mux-video-uploader/submitRemoteUpload',
        handler: 'mux.submitRemoteUpload',
        config: {
          description: 'Submit a remote video for upload',
          policies: [],
          prefix: false,
          auth: false,
        },
      },
    ],
  },
};

export default routes;
