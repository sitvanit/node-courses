const AWS = require('aws-sdk');
const { aws: { accessKeyId, secretAccessKey }} = require('./.env');

AWS.config.update({
    region: 'us-west-2',
    accessKeyId,
    secretAccessKey
});

const sqs = new AWS.SQS();

const params = {
    QueueName: 'sdkQueue'
};

sqs.createQueue(params, (err, data) => {
    if (err) console.log(err, err.stack);
    else {
        console.log(data);
        const { QueueUrl } = data;

        sqs.tagQueue({ QueueUrl, Tags: { DEPT: 'HR' }}, (err, data) => {
            if (err) console.log(err, err.stack);
            else console.log(data);
        });

        sqs.sendMessage({
            MessageBody: 'This is a deleted message',
            QueueUrl,
            DelaySeconds: 1
        }, (err, data) => {
            if (err) console.log(err, err.stack);
            else console.log(data);
        });

        sqs.receiveMessage({ QueueUrl }, (err, data) => {
            if (err) console.log(err, err.stack);
            else {
                console.log(data);
                const { ReceiptHandle } = data.Messages[0];

                sqs.deleteMessage({ QueueUrl, ReceiptHandle }, (err, data) => {
                    if (err) console.log(err, err.stack);
                    else console.log(data);
                })
            }
        });
    }
});

sqs.listQueues((err, data) => {
    if (err) console.log(err, err.stack);
    else {
        console.log(data);
        const { QueueUrls } = data;

        QueueUrls.forEach(QueueUrl => {
            sqs.deleteQueue({ QueueUrl }, (err, data) => {
                if (err) console.log(err, err.stack);
                else console.log(data);
            });
        });
    }
});

