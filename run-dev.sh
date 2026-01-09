#!/usr/bin/env bash
set -e


# Definir variables
CONTAINER_NAME="consulta-publica"
MONGO_PORT="27017"
MONGO_IMAGE="mongo:3.6"
MONGO_VOLUME="$(pwd)/tmp/db"
BAR_LENGTH=20 
PROGRESS=0

# Arriba el docker de mongo
docker ps -a | grep "$CONTAINER_NAME" | docker start "$CONTAINER_NAME" || docker run --name "$CONTAINER_NAME" -p "$MONGO_PORT:27017" --volume "$MONGO_VOLUME:/data/db" -d "$MONGO_IMAGE"

# Cargar nvm
source ~/.nvm/nvm.sh

# Verificar si Node.js v8.17.0 está instalado
if ! nvm ls 8 &> /dev/null; then
    echo "❌ Error: Node.js v8 no está instalado. Por favor, instálalo con 'nvm install v8'."
    exit 1
fi

# Usar Node.js v8.17.0
nvm use v8.17.0


echo -n  "Esperando a que MongoDB esté listo: "

# Esperar hasta que MongoDB esté listo para aceptar conexiones
until docker exec "$CONTAINER_NAME" mongo --eval "db.runCommand({ ping: 1 })" --quiet >/dev/null 2>&1; do
    sleep 0.1
    ((PROGRESS++))
    
    # Calcula el progreso (se reinicia si excede el largo)
    FILLED=$(( PROGRESS % (BAR_LENGTH + 1) ))
    EMPTY=$(( BAR_LENGTH - FILLED ))

    # Construye la barra de progreso
    BAR=$(printf "%0.s=" $(seq 1 $FILLED))"="
    SPACES=$(printf "%0.s " $(seq 1 $EMPTY))
    
    printf "\rEsperando a que MongoDB esté listo: %s%s" "$BAR" "$SPACES"
done

echo 
echo " ✔️ MongoDB está listo. levantando react"

# Arriba react!
NODE_PATH=. DEBUG=democracyos* ./node_modules/.bin/gulp bws