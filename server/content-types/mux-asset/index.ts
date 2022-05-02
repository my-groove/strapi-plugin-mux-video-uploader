export = {
  kind: 'collectionType',
  collectionName: 'muxassets',
  info: {
    name: 'mux-asset',
    description:
      'Represents a Mux Asset item, including upload and playback details',
    displayName: 'Mux Asset',
    singularName: 'mux-asset',
    pluralName: 'mux-assets',
  },
  pluginOptions: {
    'content-manager': {
      visible: false,
    },
    'content-type-builder': {
      visible: true,
    },
  },
  options: {
    increments: true,
    timestamps: true,
  },
  attributes: {
    title: {
      type: 'string',
      private: false,
      required: true,
      maxLength: 255,
      minLength: 3,
    },
    upload_id: {
      type: 'string',
      required: false,
      maxLength: 255,
    },
    asset_id: {
      type: 'string',
      required: false,
      maxLength: 255,
    },
    playback_id: {
      type: 'string',
      required: false,
      maxLength: 255,
    },
    error_message: {
      type: 'string',
      required: false,
      maxLength: 255,
    },
    isReady: {
      type: 'boolean',
      default: false,
      required: false,
    },
    playback_policy: {
      type: 'enumeration',
      enum: ['public', 'signed'],
      default: 'signed',
      required: true,
      column: {
        defaultTo: 'public', // set database level default
        notNullable: true, // enforce required at database level, even for drafts
      },
    },
  },
};
