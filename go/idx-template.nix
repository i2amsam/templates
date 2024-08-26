{ pkgs, environment ? "web", ... }: {
  bootstrap = ''
    cp -rf ${./.}/${environment} "$WS_NAME"
    chmod -R +w "$WS_NAME"
    mv "$WS_NAME" "$out"
  '';
}