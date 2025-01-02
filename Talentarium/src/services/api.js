const API_URL = 'http://localhost:5000/api';

export const authService = {
    navigateToLogin: async () => {
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.ok;
        } catch (error) {
            console.error('Error navigating to login:', error);
            return false;
        }
    },

    navigateToSignup: async () => {
        try {
            const response = await fetch(`${API_URL}/auth/signup`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.ok;
        } catch (error) {
            console.error('Error navigating to signup:', error);
            return false;
        }
    }
}; 