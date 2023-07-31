# Using local assets

While developing and previewing your app, you may reference images via URLs. While this is great for rapid prototyping, production Native apps may want to minimize rendering time by referencing assets locally. This is where Environment Variables come in.

Environment variables can be used for many purposes. You define them in your App's setting on [Ensemble Studio](https://studio.ensembleui.com/) and referencing them any where in your pages with `${env.my_env_variable_name}`. Ensemble also allow you to override these variables in production. This technique allows Ensemble to serve assets locally.

### Define the environment variables

Navigate to your App's setting and add an environment variable.
<img src="/images/build_extend_env_config.png" alt="Add Environment Variable" style="border: solid 1px lightgrey" />

### Using the environment variables

Any screens can reference the variable with `${env.variable_name}`. Here we prefix the image with the `imageBaseUrl`.
<img src="/images/build_extend_env_usage.png" alt="Add Environment Variable" style="border: solid 1px lightgrey" />

### Override environment variables to load images locally

When building Production app (see [Preparing your App](/deploy/1-prepare-app), you can load this image locally instead of via URL.

- Add the assets under folder `<Ensemble Starter>/ensemble/assets/`.
- Open `<Ensemble Starter>/ensemble/ensemble-config.yaml` and add a matching environment variable that you defined on Ensemble Studio. Leave the value empty (if all your assets are directly under /ensemble/assets).
- Note: define the variable name but with empty value will attempt to load assets from `/ensemble/assets/`.
