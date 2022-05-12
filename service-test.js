import http from 'k6/http';

export default function (d) {
    http.get('http://localhost:8080/actuator/health', {
        tags: {name:'Actuator - healthcheck'}
    });
}
