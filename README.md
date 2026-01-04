<div align="center">
   <h1>GestioPilot</h1>
   <p><strong>Decision Support & Performance Management Tool</strong></p>

   <p>
      <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
      <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
      <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
      <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
   </p>

   <p>
      <em>Developed by <strong>Oussama Kharifi</strong> & <strong>Mohammed Amine Djili</strong></em><br />
      <strong>ENSET Mohammedia – Hassan II University of Casablanca</strong>
   </p>
</div>

---

## Project Overview

**GestioPilot** is a modern web-based solution designed to democratize management control for SMEs and Business Units. It transforms complex accounting data into actionable visual indicators, automates break-even analysis, and evaluates organizational performance using the **Triangle of Performance** model.

### Table of Contents
- [Project Context](#-project-context)
- [Strategic Objectives](#-strategic-objectives)
- [Key Features](#-key-features)
- [Financial Modeling](#-financial-modeling)
- [Technology Stack](#-technology-stack)
- [Installation](#-installation)
- [Roadmap](#-roadmap)

---

## Project Context

In an increasingly uncertain economic environment, GestioPilot addresses three key challenges identified during our academic research:

* **Data Opacity:** Assessing profitability in real-time without waiting for annual financial statements.
* **Budget Rigidity:** Continuously comparing planned budgets with actual results.
* **Analytical Complexity:** Making financial concepts like the break-even point accessible to non-financial stakeholders.

## Strategic Objectives

* **Centralization:** A single, unified access point for management data.
* **Automation:** Elimination of manual calculations and human error.
* **Simplification:** Pedagogical visualization of financial indicators.
* **Decision Support:** Structural analysis of performance gaps (efficiency, effectiveness, relevance).

---

## Key Features

### 1. Decision Cockpit (Dashboard)
A high-level overview designed to assess business health in under 30 seconds.
- **Core KPIs:** Revenue, total costs, net margin, and budget achievement.
- **Management by Exception:** Highlight significant deviations between budgeted and actual values.

### 2. Data Entry & Qualification
- **Fixed vs. Variable Costs:** Systematic classification of expense nature.
- **Forecast vs. Actual:** Parallel tracking of planned budgets and realized accounting data.

### 3. Cost Analysis & Profitability
Strategic translation of data using the **Direct Costing** method.
- **Break-even Calculation:** Automatic computation of the profitability threshold.
- **Target Orientation:** Visualization of remaining revenue needed to reach the break-even point.

### 4. Triangle of Performance
Based on Gilbert’s performance model, evaluating:
- **Effectiveness:** Achievement of commercial objectives.
- **Efficiency:** Optimal use of allocated resources.
- **Relevance:** Alignment of resources with strategic objectives.

---

## Financial Modeling

GestioPilot utilizes the following formulas for analytical accuracy:

**Budget Variance:**
$V = \text{Actual} - \text{Budget}$

**Break-even Point ($BP$):**
$$BP = \frac{\text{Fixed Costs}}{\text{Contribution Margin Rate}}$$

**Performance Ratios:**
* **Commercial Effectiveness** = $\frac{\text{Actual Sales}}{\text{Target Sales}}$
* **Operational Efficiency** = $\frac{\text{Budgeted Resources}}{\text{Consumed Resources}}$

---

## Technology Stack

* **Core:** React 18, TypeScript, Vite
* **Styling:** Tailwind CSS
* **Data Viz:** Recharts
* **Icons:** Lucide React

---

## Installation

**Prerequisites:** Node.js (v14+)

```bash
# Clone the repository
git clone https://github.com/Poogast123/GestioPilot.git

# Navigate to directory
cd gestiopilot

# Install dependencies
npm install

# Start development server
npm run dev
```

