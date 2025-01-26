use axum::{Json, response::IntoResponse};
use serde::Serialize;

#[derive(Serialize)]
struct User {
    id: u32,
    name: String,
}

pub async fn get_user_handler() -> impl IntoResponse {
    let user = User {
        id: 1,
        name: "Mattias".to_string(),
    };
    Json(user)
}