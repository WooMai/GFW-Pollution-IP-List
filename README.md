# GFW Pollution IP List

Crawls GFW Pollution IP from Wikiversity.

## Requirements

* AWS Lambda with Node.js 14.x

## Deploy

```shell
zip -1rv tmp.zip .
aws lambda update-function-code --function-name YOUR-FUNCTION --zip-file fileb://tmp.zip
```

## License

MIT
