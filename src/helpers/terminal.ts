import applicationConfig from '../config/application.config';
import environmentConfig from '../config/environment.config';

export function terminal(): void {
  const appConfig = applicationConfig();
  const envConfig = environmentConfig();
  const route = () => `http://${appConfig.host}:${appConfig.port}`;
  console.log(``);
  console.log(
    `Hello 👋, your app is ready on ${route()}/${appConfig.routePrefix}`,
  );
  console.log(`To shut it down, press <CTRL> + C at any time.`);
  console.log(``);
  console.log(`------------------------------------------------------------`);
  console.log(`Environment    : ${envConfig.node}`);
  console.log(`Version        : ${appConfig.version}`);
  console.log(``);
  console.log(`API            : ${route()}/${appConfig.routePrefix}`);
  console.log(`------------------------------------------------------------`);
  console.log(``);
}
