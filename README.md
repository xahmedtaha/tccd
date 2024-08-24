## TCCD - Demo Website

The purpose of this website is a demo to show potential features and capabilities of a website for TCCD.

### Current Features
- Simple frontend to render blog posts, events, and an about page.
- A powerful admin panel with authorization and access policies to manage events, resources, sponsors, participants, blog posts and users.
- A RESTful API to manage models using bearer token authentication.
- An automatically generated and interactive ERD and API documentation.
- A few simple PHPUnit tests to show potential testing capabilities.
- A GitHub action for potential deployment automation.
- More to be added...

### Tech Stack
- PHP & Laravel (Backend Framework)
- Filament & Livewire (Admin Panel)
- Tailwind CSS (Styling) & Vue.js (Reactivity/Components Framework) & InertiaJS (Server Routing Library)

### Setup
- Install PHP 8.3
- Clone the repository.
- `composer install`
- `npm install`
- `npm run dev`
- `cp .env.example .env`
- `php artisan key:generate`
- `php artisan migrate --seed`
- `php artisan serve`
- Access the app at localhost:8000

### Admin Panel
You can access the admin panel at localhost:8000/admin

Super admin credentials: admin@test.com / password

### API Documentation
Visit `localhost:8000/docs/api`

### Database ERD
Visit `localhost:8000/docs/erd`

### Testing
Run `php artisan test` to execute the basic tests available.

These tests check the most basic features of the app as an example and should be improved.

- **AdminPanelTest**: Checks the admin panel can be accessed as the super admin.
- **EventTest**: Checks the events can be accessed and a new event can be created from the admin panel.
- **BlogTest**: Checks the blog posts can be accessed and a new post can be created from the admin panel.
- **FrontendTest**: Checks the frontend pages can be accessed and created events and blog posts can be seen.

### Deployment

This app should be deployed to a VPS with SSH access. Unfortunately, the demo server that I'm using doesn't have SSH, so I can't show you a real CI/CD integration with GitHub Actions.
However, I added a GitHub Action that runs the PHPUnit tests on each push as an alternative example at `.github/workflows/testing.yml`.
Check the actions tab!
