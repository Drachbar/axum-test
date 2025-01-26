use axum::{response::IntoResponse, Json};
use serde::Serialize;

// Modell för API-svar
#[derive(Serialize)]
struct HealthResponse {
    status: String,
}

pub async fn health_handler() -> impl IntoResponse {
    let response = HealthResponse {
        status: "ok".to_string(),
    };
    Json(response)
}
