# Utilizamos Node.js version 22 y Alpine como base
FROM node:22-alpine 

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos el resto del codigo del proyecto al contenedor
COPY . .

# Exponemos el puerto 3000
EXPOSE 3000

# Ejecutamos el comando npm start para iniciar el servidor
CMD ["npm", "start"]