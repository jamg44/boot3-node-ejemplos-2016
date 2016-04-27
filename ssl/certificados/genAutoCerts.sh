!/bin/bash
# http://blog.celogeek.com/201209/209/how-to-create-a-self-signed-wildcard-certificate/

openssl genrsa 2048 > host.key
openssl req -new -x509 -nodes -sha1 -days 3650 -key host.key > host.cert
openssl x509 -noout -fingerprint -text < host.cert > host.info
cat host.cert host.key > host.pem
chmod 400 host.key host.pem