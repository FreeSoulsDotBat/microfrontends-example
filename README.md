
# Microfrontends with Module Federations (Webpack 5)

This is a example of how you can develop a monorepo microfrontends architecture. 
Here we have 4 microfrontends sharing data between each other. 
This data can be a view, a component, a service and etc.

Here the link to the final application: https://microfrontends-example.netlify.app/


# Microfrontends description
We have 4 Microfrontends, what are they for ?

#### Data Validation: https://data-validation-mfe.vercel.app/
    This microfrontend share some services and providers of request using axios lib to the others 
    microfrontends.
#### Mf1 (microfrontend 1): https://microfrontend1-mfe.vercel.app/
    This microfrontend consumes the request services and providers shared by the data validation microfrontend
    and makes some requests to a dog API (https://www.thedogapi.com/). After that, the Mf1 microfrontend
    shares some views with images of dogs.
#### Mf2 (microfrontend 2): https://microfrontend2-mfe.vercel.app/
    This microfrontend consumes the request services and providers shared by the data validation microfrontend
    and makes some requests to a cat API (https://thecatapi.com/). After that, the Mf2 microfrontend
    shares some views with images of cats.
#### Shell: https://microfrontends-example.netlify.app/
    This microfrontend consumes some views of Mf1 and Mf2. We have a header component here too.

With module federations by webpack5, we can share data between microfrontends easily, take look to 
the code and see yourself.

# Setup the development environment

### It's required:
* The project on your desk; (clone it!)
* Docker installed; (or node and etc, because you can run the yarn start in every microfrontend separately)

### Follow this steps:
* Run `docker-compose up --build` on the root of the project;
* Access your locahost on ports 3000 for shell, 3001 for mf1, 3002 for mf2 and 3004 for data-validation.

# Reach me on:
* Linkedin: https://www.linkedin.com/in/jonatan-bossan/
* E-mail: jonatan.fbossan@gmail.com

