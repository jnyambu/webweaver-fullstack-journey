// Scroll animations and interactive utilities
export const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe all elements with animate-on-scroll class
  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });
};

export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Form validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = (formData: Record<string, string>, requiredFields: string[]): string[] => {
  const errors: string[] = [];
  
  requiredFields.forEach((field) => {
    if (!formData[field] || formData[field].trim() === '') {
      errors.push(`${field} is required`);
    }
  });

  if (formData.email && !validateEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  return errors;
};