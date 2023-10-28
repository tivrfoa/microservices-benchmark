use axum::{
    http::StatusCode,
    response::IntoResponse,
    routing::{get, post},
    Json, Router,
};
use serde::{Deserialize, Serialize};
use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(hello))
        .route("/personCreate", post(personCreate));

    let addr = SocketAddr::from(([127, 0, 0, 1], 8080));
    println!("Listening on {}", addr);
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn hello() -> String {
	"Hello World".into()
}

#[derive(Debug, Deserialize)]
struct Person {
	Name: String,
	Age: u8,
}

async fn personCreate(Json(person): Json<Person>) -> String {
	println!("{person:?}");
	format!("{} is {} years old", person.Name, person.Age)
}

