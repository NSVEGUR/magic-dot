import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  })
  const port = 3333
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  )
  await app.listen(port, () => {
    console.log(`🚀 Vegur's Server Started listening from port ${port}`)
  })
}
bootstrap()
