use std::net::SocketAddr;
mod routes;

// Huvudfunktionen där servern startar
#[tokio::main]
async fn main() {
    // Skapa en router med en endpoint
    let app = routes::create_routes();

    // Starta servern på port 3000
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    println!("Servern körs på http://{}", addr);

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
