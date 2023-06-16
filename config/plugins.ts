module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'aws-s3',
        s3Options:{

        },
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_REGION'),
          params: {
            ACL: 'private', // <== set ACL to private
            signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 60 * 60 * 24 * 7),
            Bucket: env('AWS_BUCKET'),
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    seo: {
        enabled: true,
      },
      transformer: {
        enabled: true,
        config: {
          prefix: "/api/",
          responseTransforms: {
            removeAttributesKey: true,
            removeDataKey: true,
          },
        },
      },
 
    // ...
  });