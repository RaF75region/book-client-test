#!/bin/bash
echo "Running initial grpc..."

protoc -I=src/protos greet.proto \
  --js_out=import_style=commonjs:src/models \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:src/models

echo "gRPC code generation complete."