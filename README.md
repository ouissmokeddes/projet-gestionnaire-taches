# 📝 Gestionnaire de Tâches



## 🛠️ Organisation du projet

### 📁 Frontend (React)

Dans le dossier `frontend/` :
- `src/components` : composants réutilisables (boutons, formulaires, etc.)
- `src/pages` : vues principales (Login, Register, Dashboard)
- `src/contexts/AuthContext.js` : gestion de l'authentification
- Utilisation d’un **proxy** pour communiquer avec le backend (`localhost:3001`)

### 📁 Backend (Node.js/Express)

Dans le dossier `backend/` (ou API) :
- Routes pour l’authentification et la gestion des tâches
- Retourne les réponses JSON au frontend

---

## ✅ Partie Tests

- **Tests d’intégration** : vérifient les formulaires et interactions
- **Tests end-to-end (E2E)** : automatisés avec Selenium pour simuler un vrai utilisateur

---

## 🚀 Partie DevOps

- Mise en place d’une **intégration continue (CI)** avec GitHub Actions :
  - Installation des dépendances
  - Lint (ESLint)
  - Build React
  - Lancement des tests

- Monitoring via l'onglet **Actions** de GitHub



Une application fonctionnelle qui permet à un utilisateur de s’inscrire, se connecter, et gérer ses tâches de manière fluide.
