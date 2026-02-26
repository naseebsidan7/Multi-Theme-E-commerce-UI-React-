# Multi-Theme E-commerce UI (React)

## Overview

This project is a multi-theme e-commerce frontend application built using React.  
Each theme is implemented as a separate module and accessed via independent routes.

Themes implemented:
- Ekomart
- Electro
- MarketPro (structure prepared)

The project focuses on modular architecture, reusable components, and responsive UI design.

---

## Architecture & Structure

The project follows a modular component-based architecture:

- `pages/` → Entry components for each theme
- `components/common/` → Reusable UI components (ProductCard, TextHeading)
- `constants/` → Static product data
- `assets/` → Images and theme resources

Each theme reuses shared components while applying different styling and layouts.

---

## Routing

Themes are accessed via:

- `/ekomart`
- `/electro`
- `/marketpro`

Routing is managed using React Router.

---

## Key Features

- Responsive layout (CSS Grid & Flexbox)
- Reusable product card component
- Modular folder structure
- Theme separation via routing
- Clean UI architecture

---

## Installation & Running Locally

1. Clone the repository:

```bash
git clone <[repository-link](https://github.com/naseebsidan7/Multi-Theme-E-commerce-UI-React-.git)>
