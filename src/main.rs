use axum::{
    routing::get,
    Router,
    response::IntoResponse,
    Json,
};
use serde::Serialize;
use std::net::SocketAddr;

// Skapa en modell som representerar API-svaret
#[derive(Serialize)]
struct ApiResponse {
    message: String,
    status: String,
}

// Huvudfunktionen där servern startar
#[tokio::main]
async fn main() {
    // Skapa en router med en endpoint
    let app = Router::new()
        .route("/api/hello", get(hello_handler));

    // Starta servern på port 3000
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    println!("Servern körs på http://{}", addr);

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

// Hanterare som returnerar JSON-data
async fn hello_handler() -> impl IntoResponse {
    let response = ApiResponse {
        message: "Hej från Axum!".to_string(),
        status: "success".to_string(),
    };

    Json(response)
}
