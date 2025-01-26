use axum::Router;

mod health;
mod user;

pub fn create_routes() -> Router {
    Router::new()
        .route("/api/health", axum::routing::get(health::health_handler))
        .route("/api/users", axum::routing::get(user::get_user_handler))
}