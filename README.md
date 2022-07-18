# SimpleMemo - A simple memo web app.

This app can make simple memo and remember temporarily. But not deployed, so if you want to use it, need to deploy at any environment.

# Assumed environment

location: Japan (If you want to go to another country, you need to rewrite the code accordingly.)
communication protocol: http (if you want https,  you need to rewrite the code accordingly.)

# Demo

comming soon

# How to deploy

1. If environment selected by you doesn't have docker, please install [docker](https://docs.docker.com/get-docker/).
2. If this environment doesn't have docker-compose, please install [docker-compose](https://docs.docker.com/compose/install/).
3. Download this project to any directory this environment and move to this project directory.
4. Open the docker-compose.yml file in an editor such as vi.
5. Please change MYSQL_ROOT_PASSWORD, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD of environment of mysql as appropriate.
6. Please change the ports of development-web-server as appropriate.
7. Save your changes to the docker-compose.yml file and then close it.
8. Open the env.tsx file in an editor such as vi.
9. Change the productionEnv part according to the contents of the docker-compose.yml file.
10.  Run "docker-compose up" or "docker compose up".(It depends on the environment.)


# Contribution

If you find a bug or an improvement, please post it in issues.
