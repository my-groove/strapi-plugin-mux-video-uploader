const routes = [
  {
    method: 'GET',
    path: '/mux-asset',
    handler: 'mux-asset.find',
    config: {
      description: 'Returns all the MuxAsset items',
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/mux-asset/count',
    handler: 'mux-asset.count',
    config: {
      description: 'Returns a count of MuxAsset items',
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/mux-asset/:id',
    handler: 'mux-asset.findOne',
    config: {
      description: 'Returns a MuxAsset based on a supplied id',
      policies: [],
    },
  },

  // Additional
  {
    method: 'POST',
    path: '/mux-video-uploader/mux-assets',
    handler: 'mux-asset.createBulk',
    config: {
      policies: ['plugin::mux-video-uploader.adminOrApiAuth'],
      auth: false,
      prefix: false,
    },
  },
  {
    method: 'POST',
    path: '/mux-video-uploader/submitRemoteUpload',
    handler: 'mux.submitRemoteUpload',
    config: {
      policies: ['plugin::mux-video-uploader.adminOrApiAuth'],
      auth: false,
      prefix: false,
    },
  },
];

export default routes;
