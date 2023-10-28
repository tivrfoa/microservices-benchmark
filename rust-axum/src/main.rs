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

    let port = std::env::var("HTTP_PORT")
        .unwrap_or("8080".into())
        .parse::<u16>()
        .unwrap();
    let addr = SocketAddr::from(([127, 0, 0, 1], port));
    println!("Listening on {}", addr);
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn hello() -> String {
	"Hello World".into()
}

#[derive(Deserialize)]
struct Person {
	Name: String,
	Age: u8,
}

#[axum::debug_handler]
async fn personCreate(Json(person): Json<Person>) -> Result<impl IntoResponse, StatusCode> {
	Ok(format!("{} is {} years old", person.Name, person.Age))
}

