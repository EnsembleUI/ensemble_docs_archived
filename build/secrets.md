# Application Secrets

Your application may require using sensitive values for managing access to remote data. Ensemble supports configuring development secrets easily and securely during runtime, and the ability to inject separate production secrets when deploying.

### Define Secrets for development

Navigate to your App's setting and add a secret
<img src="/images/build_extend_secrets_config.png" alt="Add Secret" style="border: solid 1px lightgrey" />

Only application owners and editors can add or change secret values due to their sensitive nature.

### Using Secrets

Any screens can reference the variable with `${secrets.key_name}`. Here we are simply displaying the secret value in a text field.
<img src="/images/build_extend_secrets_usage.png" alt="Use Secret" style="border: solid 1px lightgrey" />

### Inject Production Secrets for Deployment

You can override your secrets for deployment from the .env file in your Ensemble project by using the same key with a different value.

We do not recommend version controlling your .env file as this will expose your secrets. Consider removing your .env file from version control or injecting secrets at build time.