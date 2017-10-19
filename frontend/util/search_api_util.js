// const xappToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUwNzc3OTQ4NywiaWF0IjoxNTA3MTc0Njg3LCJhdWQiOiI1OWQ1YTkxZmM5ZGMyNDE5MGIwNjkxMzYiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNTlkNWE5MWYyYTg5M2E2ZGZlZmRjN2U1In0.c9NMrQVnSXFS5HiPse76-sWfHaEePM1svI7QZ2b4ioc';
// const xappToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUwODQzNTQ2MCwiaWF0IjoxNTA3ODMwNjYwLCJhdWQiOiI1OWRmYWI4M2EwOWE2NzI1NDk0YzNiZjAiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNTlkZmFiODRjOWRjMjQ3NzBlM2I1OTBkIn0.111JGas8GLI7Lm2MEtgP7D7BM1oyas4h2MqoqB44Law";
const xappToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTUwOTA1Mjc2MywiaWF0IjoxNTA4NDQ3OTYzLCJhdWQiOiI1OWRmYWI4M2EwOWE2NzI1NDk0YzNiZjAiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNTllOTE2ZGI5YzE4ZGI2MmU4Y2I5OGMyIn0.aLF4ON7L9zLjdzFPJB-aKFS8vQcSNqdYj67o1FQPbII";

export const sendSearchQuery = searchQuery => {
  return $.ajax({
    method: "GET",
    url: "https://api.artsy.net/api/search?q=" + searchQuery,
    beforeSend: function(xhr){xhr.setRequestHeader('X-Xapp-Token', xappToken);},
    error: (err) => console.log(err),
  })
};