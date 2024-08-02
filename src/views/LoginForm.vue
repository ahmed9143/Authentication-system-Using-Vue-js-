<template>
  <div class="site-container">
    <div class="login-container">


      <!-- Tabs for switching between login and register -->
      <div class="mb-4">
        <span @click="switchTab('login')" :class="{ active: !isSignup && !isForgotPassword }">
          <i class="fas fa-sign-in-alt"></i> Login
        </span>
        <span @click="switchTab('register')" :class="{ active: isSignup }">
          <i class="fas fa-user-plus"></i> Register
        </span>
      </div>

      <!-- Form for login, register, and forgot password -->
      <form
        @submit.prevent="submitForm"
        class="needs-validation"
        :class="{ 'show-register': isSignup, 'show-forgot-password': isForgotPassword }"
        novalidate
      >
        <!-- Title based on the current form state (login, register, forgot password) -->
        <h2 class="mb-4">{{ formTitle }}</h2>

        <!-- Username input -->
        <div v-if="!isForgotPassword" class="mb-3 input-group">
          <div class="input-group-prepend">
            <span class="input-group-text icon-container">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
          <label :for="usernameField" class="visually-hidden">{{ usernameLabel }}</label>
          <input
            :type="usernameFieldType"
            :id="usernameField"
            v-model="username"
            class="form-control shadow-none"
            required
            :placeholder="usernamePlaceholder"
          />
          <div class="invalid-feedback">
            {{ usernameValidationMessage }}
          </div>
        </div>

        <!-- Password input -->
        <div v-if="!isForgotPassword" class="mb-3 input-group">
          <div class="input-group-prepend">
            <span class="input-group-text icon-container">
              <i class="fas fa-lock"></i>
            </span>
          </div>
          <label :for="passwordField" class="visually-hidden">{{ passwordLabel }}</label>
          <input
            :type="passwordFieldType"
            :id="passwordField"
            v-model="password"
            class="form-control shadow-none"
            required
            :placeholder="passwordPlaceholder"
          />
          <div class="invalid-feedback">
            {{ passwordValidationMessage }}
          </div>
        </div>

        <!-- User type selection and "Remember Me" checkbox for login -->
        <div v-if="!isSignup && !isForgotPassword" class="mb-3 d-flex align-items-center">
          <label class="form-check-label">
            <input type="radio" v-model="userType" value="student" class="form-check-input" />
            Student
          </label>
          <label class="form-check-label ms-4 me-4">
            <input type="radio" v-model="userType" value="admin" class="form-check-input" />
            Admin
          </label>
          <label class="form-check-label">
            <input type="radio" v-model="userType" value="supervisor" class="form-check-input" />
            Supervisor
          </label>
        </div>

        <!-- "Remember Me" checkbox and "Forgot Password?" link for login -->
        <div v-if="!isSignup && !isForgotPassword" class="mb-3 form-check">
          <input
            type="checkbox"
            id="rememberMe"
            v-model="rememberMe"
            class="form-check-input"
          />
          <label for="rememberMe" class="form-check-label">
            Remember Me
          </label>
          <a @click.prevent="forgotPassword" class="link-primary ms-3">
            Forgot Password?
          </a>
        </div>

        <!-- Confirm Password input for registration -->
        <div v-if="isSignup" class="mb-3 input-group">
          <div class="input-group-prepend">
            <span class="input-group-text icon-container">
              <i class="fas fa-lock"></i>
            </span>
          </div>
          <label for="confirmPassword" class="visually-hidden">Confirm Password:</label>
          <input
            :type="passwordFieldType"
            id="confirmPassword"
            v-model="confirmPassword"
            class="form-control shadow-none"
            required
            placeholder="Confirm Password"
          />
          <div class="invalid-feedback">
            {{ confirmPasswordValidationMessage }}
          </div>
        </div>

        <!-- Email input for forgot password -->
        <div v-if="isForgotPassword" class="mb-3 input-group">
          <div class="input-group-prepend">
            <span class="input-group-text icon-container">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
          <label :for="forgotEmailField" class="visually-hidden">Email:</label>
          <input
            type="text"
            :id="forgotEmailField"
            v-model="forgotEmail"
            class="form-control shadow-none"
            required
            :pattern="emailPattern"
            placeholder="Email"
          />
          <div class="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>

        <!-- Form buttons based on the current form state -->
        <button v-if="!isSignup && !isForgotPassword" type="submit" @click="login" class="btn btn-primary">{{ formButton }}</button>
        <button v-if="isSignup && !isForgotPassword" type="submit" @click="login" class="btn btn-primary">{{ formButton }}</button>
        <button v-if="isForgotPassword" type="button" @click="sendResetLink" class="btn btn-secondary">Send Reset Link</button>

        <!-- Display error and success messages -->
        <div v-if="errorMessage" class="mt-3 alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
        <div v-if="successMessage" class="mt-3 alert alert-success" role="alert">
          {{ successMessage }}
        </div>
      </form>
    </div>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: '',
        rememberMe: false,
        errorMessage: null,
        successMessage: null,
        isSignup: false,
        isForgotPassword: false,
        forgotEmail: '',
        userType: 'student',
        emailPattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      };
    },
    computed: {
      formTitle() {
        if (this.isSignup) return 'Create Account';
        if (this.isForgotPassword) return 'Forgot Password';
        return 'Login';
      },
      formButton() {
        if (this.isSignup) return 'Create Account';
        if (this.isForgotPassword) return 'Reset Password';
        return 'Login';
      },
      usernameLabel() {
        return this.userType === 'admin' ? 'Admin Email:' : 'Email ';
      },
      usernameField() {
        return this.userType === 'admin' ? 'adminUsername' : 'username';
      },
      usernameFieldType() {
        return this.userType === 'admin' ? 'text' : 'email';
      },
      usernamePlaceholder() {
        return this.isSignup ? 'Email' : this.userType === 'admin' ? 'Admin Email' : 'Email ';
      },
      passwordLabel() {
        return this.userType === 'admin' ? 'Admin Password:' : 'Password:';
      },
      passwordField() {
        return this.userType === 'admin' ? 'adminPassword' : 'password';
      },
      passwordFieldType() {
        return this.userType === 'admin' ? 'password' : 'password';
      },
      passwordPlaceholder() {
        return this.isSignup ? 'Password' : this.userType === 'admin' ? 'Admin Password' : 'Password';
      },
      confirmPasswordPlaceholder() {
        return 'Confirm Password';
      },
      usernameValidationMessage() {
        if (this.isSignup) {
          return 'Please enter a valid email address.';
        }
        return this.userType === 'admin' ? 'Please enter a valid admin email address.' : 'Please enter a valid email address.';
      },
      passwordValidationMessage() {
        if (this.isSignup) {
          return 'Password should contain at least 8 characters, one uppercase letter, one lowercase letter, and one number.';
        }
        return this.userType === 'admin' ? 'Please enter a valid admin password.' : 'Please enter a valid password.';
      },
      confirmPasswordValidationMessage() {
        return 'Confirm password does not match the password.';
      }
    },
    methods: {
      submitForm() {
        this.errorMessage = null;
        this.successMessage = null;
  
        if (this.validateForm()) {
          if (this.isSignup) {
            // Add your signup logic here
            console.log('Account created successfully');
            this.successMessage = 'Account created successfully!';
          } else if (this.isForgotPassword) {
            // Add your forgot password logic here
            console.log('Password reset instructions sent to your email.');
            this.successMessage = 'Password reset instructions sent to your email.';
          } else {
            // Add your login logic here
            console.log('Login successful');
            console.log('Username:', this.username);
            console.log('Password:', this.password);
            console.log('Remember Me:', this.rememberMe);
            console.log('User Type:', this.userType);
            // Redirect based on user type
            this.redirectBasedOnUserType();
          }
        }
      },
      forgotPassword() {
        this.isForgotPassword = true;
      },
      switchTab(tab) {
        this.isSignup = tab === 'register';
        this.isForgotPassword = tab === 'forgotPassword';
      },
      sendResetLink() {
        // Add logic to send a reset link
        console.log('Reset link sent to', this.forgotEmail);
        this.successMessage = 'Reset link sent to your email.';
      },
      validateForm() {
        const form = document.querySelector('.needs-validation');
        if (form.checkValidity() === false) {
          form.classList.add('was-validated');
          this.errorMessage = 'Please fill out all the required fields correctly.';
          return false;
        }
  
        if (this.isSignup && this.password !== this.confirmPassword) {
          this.errorMessage = this.confirmPasswordValidationMessage;
          return false;
        }
  
        return true;
      },
      async authenticateUser() {
      // Add your authentication logic here
      // You may use a backend API or other authentication mechanisms

      // Simulating authentication with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Placeholder logic: Check username and password
      if (this.username === 'admin' && this.password === 'admin') {
        return { success: true, userType: 'admin' };
      } else if (this.username === 'student' && this.password === 'student') {
        return { success: true, userType: 'student' };
      } else if (this.username === 'supervisor' && this.password === 'supervisor') {
        return { success: true, userType: 'supervisor' };
      } else {
        return { success: false, userType: null };
      }
    },

    async login() {
      this.errorMessage = null;
      this.successMessage = null;

      const authResult = await this.authenticateUser();

      if (authResult.success) {
        this.userType = authResult.userType;
        this.redirectBasedOnUserType();
      } else {
        this.errorMessage = 'Invalid credentials. Please try again.';
      }
    },

    redirectBasedOnUserType() {
  switch (this.userType) {
    case 'admin':
      this.$router.push('/dashboard/admin');
      break;
  }
},

  },
  };
  </script>
  
  
  <style scoped>
  .site-container {
  background: url('@/assets/R.jpeg') center center/cover fixed; 
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  }

  
  .login-container {
    position: relative;
    margin-top: 25px;
    z-index: 0; /* Ensure the login container appears below the semi-circle */
  }
  
  .login-container, .show-register form {
  max-width: 400px;
  width: 100%;
  margin: auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #333;
  }
  
  form {
    transition: height 0.3s;
  }
  
  .show-register form,
  .show-forgot-password form {
    height: 340px;
  }
  
  span {
    cursor: pointer;
    padding: 10px;
    margin-right: 10px;
    font-size: 16px;
  }
  
  span.active {
    border-bottom: 2px solid #007bff;
  }
  
  .link-primary {
    color: #007bff;
    text-decoration: none;
    display: inline-block;
  }
  
  .link-primary:hover {
    text-decoration: underline;
  }
  
  .mb-3 {
    margin-bottom: 15px;
  }
  
  .mb-4 {
    margin-bottom: 20px;
  }
  
  .mt-3 {
    margin-top: 15px;
  }
  
  .alert {
    margin-top: 15px;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  .input-group-text {
    min-width: 40px;
    text-align: center;
  }
  
  .form-control {
    flex: 1;
  }
  
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  
  </style>
  