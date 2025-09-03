#!/usr/bin/env node

/**
 * UmukoziHR Brand Integration Validation Script
 * 
 * This script validates all brand integration requirements for task 12:
 * - Brand consistency across all sections
 * - Interactive elements using appropriate brand colors
 * - Logo functionality as home page link
 * - Smooth animations and transitions with new color scheme
 * - Responsive behavior of all brand elements
 */

const fs = require('fs');
const path = require('path');

// Brand color specifications
const BRAND_COLORS = {
  primary: {
    orange: '#FF7A00',
    teal: '#1E5A5A'
  },
  secondary: {
    lightOrange: '#FFB366',
    lightTeal: '#4A8B8B'
  },
  dark: {
    orangeDark: '#CC6200',
    tealDark: '#174747'
  }
};

// Test results storage
const testResults = {
  passed: 0,
  failed: 0,
  warnings: 0,
  tests: []
};

function logTest(name, status, message, details = '') {
  const test = { name, status, message, details, timestamp: new Date().toISOString() };
  testResults.tests.push(test);
  
  const statusIcon = status === 'PASS' ? '✅' : status === 'FAIL' ? '❌' : '⚠️';
  console.log(`${statusIcon} ${name}: ${message}`);
  
  if (details) {
    console.log(`   ${details}`);
  }
  
  if (status === 'PASS') testResults.passed++;
  else if (status === 'FAIL') testResults.failed++;
  else testResults.warnings++;
}

function validateFileExists(filePath, description) {
  if (fs.existsSync(filePath)) {
    logTest(`File Existence: ${description}`, 'PASS', `${filePath} exists`);
    return true;
  } else {
    logTest(`File Existence: ${description}`, 'FAIL', `${filePath} not found`);
    return false;
  }
}

function validateBrandColorsInCSS() {
  const cssPath = 'app/globals.css';
  if (!validateFileExists(cssPath, 'Global CSS')) return;
  
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  
  // Check for brand color definitions
  const colorChecks = [
    { name: 'Primary Orange', value: '24 100% 50%', pattern: /--umukozi-orange:\s*24\s+100%\s+50%/ },
    { name: 'Primary Teal', value: '180 50% 23%', pattern: /--umukozi-teal:\s*180\s+50%\s+23%/ },
    { name: 'Light Orange', value: '24 100% 70%', pattern: /--umukozi-orange-light:\s*24\s+100%\s+70%/ },
    { name: 'Light Teal', value: '180 30% 42%', pattern: /--umukozi-teal-light:\s*180\s+30%\s+42%/ }
  ];
  
  colorChecks.forEach(check => {
    if (check.pattern.test(cssContent)) {
      logTest(`Brand Color: ${check.name}`, 'PASS', `HSL value ${check.value} found in CSS`);
    } else {
      logTest(`Brand Color: ${check.name}`, 'FAIL', `HSL value ${check.value} not found in CSS`);
    }
  });
  
  // Check for gradient definitions
  const gradientChecks = [
    { name: 'Hero Gradient', pattern: /--umukozi-gradient-hero/ },
    { name: 'Cards Gradient', pattern: /--umukozi-gradient-cards/ },
    { name: 'Subtle Gradient', pattern: /--umukozi-gradient-subtle/ }
  ];
  
  gradientChecks.forEach(check => {
    if (check.pattern.test(cssContent)) {
      logTest(`Brand Gradient: ${check.name}`, 'PASS', 'Gradient definition found');
    } else {
      logTest(`Brand Gradient: ${check.name}`, 'FAIL', 'Gradient definition missing');
    }
  });
  
  // Check for utility classes
  const utilityChecks = [
    { name: 'bg-umukozi-orange', pattern: /\.bg-umukozi-orange/ },
    { name: 'text-umukozi-orange', pattern: /\.text-umukozi-orange/ },
    { name: 'border-umukozi-orange', pattern: /\.border-umukozi-orange/ },
    { name: 'bg-umukozi-teal', pattern: /\.bg-umukozi-teal/ },
    { name: 'text-umukozi-teal', pattern: /\.text-umukozi-teal/ },
    { name: 'hover:bg-umukozi-orange', pattern: /\.hover\\:bg-umukozi-orange:hover/ },
    { name: 'hover:text-umukozi-orange', pattern: /\.hover\\:text-umukozi-orange:hover/ }
  ];
  
  utilityChecks.forEach(utility => {
    if (utility.pattern.test(cssContent)) {
      logTest(`CSS Utility: ${utility.name}`, 'PASS', 'Utility class defined');
    } else {
      logTest(`CSS Utility: ${utility.name}`, 'FAIL', 'Utility class missing');
    }
  });
}

function validateLogoComponent() {
  const logoPath = 'components/umukozi-logo.tsx';
  if (!validateFileExists(logoPath, 'Logo Component')) return;
  
  const logoContent = fs.readFileSync(logoPath, 'utf8');
  
  // Check for proper alt text
  if (logoContent.includes('UmukoziHR - AI-Powered HR Solutions')) {
    logTest('Logo Alt Text', 'PASS', 'Proper alt text found');
  } else {
    logTest('Logo Alt Text', 'FAIL', 'Proper alt text missing');
  }
  
  // Check for responsive sizing
  if (logoContent.includes('responsive') && logoContent.includes('w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px]')) {
    logTest('Logo Responsive Sizing', 'PASS', 'Responsive sizing classes found');
  } else {
    logTest('Logo Responsive Sizing', 'FAIL', 'Responsive sizing classes missing');
  }
  
  // Check for home page link functionality
  if (logoContent.includes('Link') && logoContent.includes('href="/"')) {
    logTest('Logo Home Link', 'PASS', 'Logo functions as home page link');
  } else {
    logTest('Logo Home Link', 'FAIL', 'Logo home page link missing');
  }
  
  // Check for focus states
  if (logoContent.includes('focus:outline-umukozi-orange')) {
    logTest('Logo Focus State', 'PASS', 'Brand-colored focus state found');
  } else {
    logTest('Logo Focus State', 'FAIL', 'Brand-colored focus state missing');
  }
  
  // Check for fallback component
  if (logoContent.includes('UmukoziLogoFallback')) {
    logTest('Logo Fallback', 'PASS', 'Fallback component implemented');
  } else {
    logTest('Logo Fallback', 'FAIL', 'Fallback component missing');
  }
}

function validateMainPageComponent() {
  const pagePath = 'app/page.tsx';
  if (!validateFileExists(pagePath, 'Main Page Component')) return;
  
  const pageContent = fs.readFileSync(pagePath, 'utf8');
  
  // Check for UmukoziHR branding
  const brandingChecks = [
    { name: 'Hero Headline', text: 'Automate Your Entire Hiring Workflow With AI Agents' },
    { name: 'Hero Subtext', text: 'Connect with top talent faster using UmukoziHR' },
    { name: 'Primary CTA', text: 'Start Hiring Smarter' },
    { name: 'Secondary CTA', text: 'See Platform Demo' }
  ];
  
  brandingChecks.forEach(check => {
    if (pageContent.includes(check.text)) {
      logTest(`Content: ${check.name}`, 'PASS', `"${check.text}" found`);
    } else {
      logTest(`Content: ${check.name}`, 'FAIL', `"${check.text}" not found`);
    }
  });
  
  // Check for brand color usage in components
  const colorUsageChecks = [
    'bg-umukozi-orange',
    'text-umukozi-orange',
    'hover:bg-umukozi-orange',
    'bg-umukozi-teal',
    'text-umukozi-teal',
    'border-umukozi-orange',
    'focus:outline-umukozi-orange'
  ];
  
  colorUsageChecks.forEach(colorClass => {
    if (pageContent.includes(colorClass)) {
      logTest(`Color Usage: ${colorClass}`, 'PASS', 'Brand color class used');
    } else {
      logTest(`Color Usage: ${colorClass}`, 'WARNING', 'Brand color class not found in main page');
    }
  });
  
  // Check for UmukoziLogo component usage
  if (pageContent.includes('<UmukoziLogo')) {
    logTest('Logo Component Usage', 'PASS', 'UmukoziLogo component used');
  } else {
    logTest('Logo Component Usage', 'FAIL', 'UmukoziLogo component not used');
  }
  
  // Check for gradient backgrounds
  if (pageContent.includes('bg-umukozi-gradient')) {
    logTest('Gradient Usage', 'PASS', 'Brand gradients used');
  } else {
    logTest('Gradient Usage', 'FAIL', 'Brand gradients not used');
  }
}

function validateLayoutAndMetadata() {
  const layoutPath = 'app/layout.tsx';
  if (!validateFileExists(layoutPath, 'Layout Component')) return;
  
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');
  
  // Check for updated metadata
  const metadataChecks = [
    { name: 'Page Title', text: 'UmukoziHR - AI-Powered HR Solutions' },
    { name: 'Description', text: 'Transform your hiring with UmukoziHR' },
    { name: 'Keywords', text: 'HR solutions' }
  ];
  
  metadataChecks.forEach(check => {
    if (layoutContent.includes(check.text)) {
      logTest(`Metadata: ${check.name}`, 'PASS', `"${check.text}" found in metadata`);
    } else {
      logTest(`Metadata: ${check.name}`, 'FAIL', `"${check.text}" not found in metadata`);
    }
  });
}

function validateAccessibilityFeatures() {
  const cssPath = 'app/globals.css';
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  
  // Check for high contrast mode support
  if (cssContent.includes('@media (prefers-contrast: high)')) {
    logTest('High Contrast Support', 'PASS', 'High contrast media query found');
  } else {
    logTest('High Contrast Support', 'FAIL', 'High contrast media query missing');
  }
  
  // Check for skip to main content
  if (cssContent.includes('.skip-to-main')) {
    logTest('Skip to Main Content', 'PASS', 'Skip link styles found');
  } else {
    logTest('Skip to Main Content', 'FAIL', 'Skip link styles missing');
  }
  
  // Check for focus state definitions
  if (cssContent.includes('focus\\:outline-umukozi-orange:focus') || cssContent.includes('focus\\:outline-2:focus')) {
    logTest('Focus States', 'PASS', 'Brand-colored focus states defined');
  } else {
    logTest('Focus States', 'FAIL', 'Brand-colored focus states missing');
  }
}

function validateResponsiveDesign() {
  const cssPath = 'app/globals.css';
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  
  // Check for mobile-specific optimizations
  if (cssContent.includes('@media (max-width: 640px)')) {
    logTest('Mobile Breakpoints', 'PASS', 'Mobile-specific styles found');
  } else {
    logTest('Mobile Breakpoints', 'FAIL', 'Mobile-specific styles missing');
  }
  
  // Check for tablet optimizations
  if (cssContent.includes('tablet-brand-spacing')) {
    logTest('Tablet Optimizations', 'PASS', 'Tablet-specific brand spacing found');
  } else {
    logTest('Tablet Optimizations', 'WARNING', 'Tablet-specific optimizations could be enhanced');
  }
}

function validateAnimationsAndTransitions() {
  const pagePath = 'app/page.tsx';
  const pageContent = fs.readFileSync(pagePath, 'utf8');
  
  // Check for motion animations
  if (pageContent.includes('motion.div') && pageContent.includes('animate=')) {
    logTest('Motion Animations', 'PASS', 'Framer Motion animations found');
  } else {
    logTest('Motion Animations', 'FAIL', 'Motion animations missing');
  }
  
  // Check for transition classes
  if (pageContent.includes('transition-') && pageContent.includes('duration-')) {
    logTest('CSS Transitions', 'PASS', 'Transition classes found');
  } else {
    logTest('CSS Transitions', 'FAIL', 'Transition classes missing');
  }
  
  // Check for hover effects
  if (pageContent.includes('hover:') && pageContent.includes('group-hover:')) {
    logTest('Hover Effects', 'PASS', 'Hover effect classes found');
  } else {
    logTest('Hover Effects', 'FAIL', 'Hover effect classes missing');
  }
}

function generateTestReport() {
  const reportPath = 'brand-integration-test-report.json';
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total: testResults.tests.length,
      passed: testResults.passed,
      failed: testResults.failed,
      warnings: testResults.warnings,
      successRate: `${((testResults.passed / testResults.tests.length) * 100).toFixed(1)}%`
    },
    requirements: {
      'Brand consistency across all sections': testResults.tests.filter(t => t.name.includes('Brand') || t.name.includes('Color')),
      'Interactive elements use appropriate brand colors': testResults.tests.filter(t => t.name.includes('Color Usage') || t.name.includes('Hover')),
      'Logo functionality as home page link': testResults.tests.filter(t => t.name.includes('Logo')),
      'Smooth animations and transitions': testResults.tests.filter(t => t.name.includes('Motion') || t.name.includes('Transition')),
      'Responsive behavior of all brand elements': testResults.tests.filter(t => t.name.includes('Responsive') || t.name.includes('Mobile'))
    },
    tests: testResults.tests
  };
  
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  logTest('Test Report Generation', 'PASS', `Report saved to ${reportPath}`);
  
  return report;
}

function main() {
  console.log('🎨 UmukoziHR Brand Integration Validation');
  console.log('==========================================\n');
  
  console.log('📋 Testing Task 12 Requirements:');
  console.log('- Conduct comprehensive testing across all sections for brand consistency');
  console.log('- Verify all interactive elements use appropriate brand colors');
  console.log('- Test logo functionality as home page link');
  console.log('- Ensure smooth animations and transitions with new color scheme');
  console.log('- Validate responsive behavior of all brand elements\n');
  
  // Run all validation tests
  validateBrandColorsInCSS();
  validateLogoComponent();
  validateMainPageComponent();
  validateLayoutAndMetadata();
  validateAccessibilityFeatures();
  validateResponsiveDesign();
  validateAnimationsAndTransitions();
  
  // Generate final report
  const report = generateTestReport();
  
  console.log('\n📊 Test Summary:');
  console.log(`Total Tests: ${report.summary.total}`);
  console.log(`✅ Passed: ${report.summary.passed}`);
  console.log(`❌ Failed: ${report.summary.failed}`);
  console.log(`⚠️  Warnings: ${report.summary.warnings}`);
  console.log(`Success Rate: ${report.summary.successRate}`);
  
  if (report.summary.failed === 0) {
    console.log('\n🎉 ALL BRAND INTEGRATION TESTS PASSED!');
    console.log('✅ Task 12 requirements have been successfully validated.');
  } else {
    console.log('\n⚠️  Some tests failed. Please review the issues above.');
  }
  
  console.log(`\n📄 Detailed report saved to: brand-integration-test-report.json`);
}

// Run the validation
main();