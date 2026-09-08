# Etapa 1: construccion build
FROM node:22-alpine as build-stage

# Directorio de trabajo
WORKDIR /app

# Instalamos las dependencias del proyecto
COPY package*.json ./
RUN npm install

# Copiamos el codigo fuente de Angular
COPY . .

# Compilamos Angular para produccion
RUN npm run build --configuration=production

# Etapa 2: Servidor web nginx
FROM nginx:alpine

# Copiamos SOLAMENTE los archivos compiladosde la Etapa 1 a la carpeta de nginx
COPY --from=build-stage /app/dist/frontend/browser /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Ejecutamos nginx
CMD ["nginx", "-g", "daemon off;"]
