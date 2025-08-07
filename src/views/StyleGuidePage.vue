<!--|== Template =============================================================================== -->
<template>
  <section class="page style-guide">
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <!-- Header -->
          <section class="intro">
            <h1>Design System Style Guide</h1>
            <p class="lead">
              A comprehensive showcase of all styled elements, components, and design tokens used in
              this Vue application.
            </p>
          </section>

          <!-- Navigation -->
          <section class="style-nav">
            <h2>Quick Navigation</h2>
            <nav class="style-nav-links">
              <a href="#design-tokens">Design Tokens</a>
              <a href="#typography">Typography</a>
              <a href="#layout">Layout</a>
              <a href="#forms">Forms</a>
              <a href="#buttons">Buttons</a>
              <a href="#components">Components</a>
              <a href="#utilities">Utilities</a>
              <a href="#states">States</a>
            </nav>
          </section>

          <!-- Design Tokens -->
          <section id="design-tokens">
            <h2>Design Tokens</h2>

            <h3>Colors</h3>
            <div class="color-grid">
              <div class="color-card">
                <div
                  class="color-swatch"
                  style="background: #06c"
                />
                <div class="color-info">
                  <strong>Primary Blue</strong><br />
                  <code>#0066cc</code>
                </div>
              </div>
              <div class="color-card">
                <div
                  class="color-swatch"
                  style="background: #0052a3"
                />
                <div class="color-info">
                  <strong>Primary Dark</strong><br />
                  <code>#0052a3</code>
                </div>
              </div>
              <div class="color-card">
                <div
                  class="color-swatch"
                  style="background: #fff; border: 1px solid #ddd"
                />
                <div class="color-info">
                  <strong>White</strong><br />
                  <code>#ffffff</code>
                </div>
              </div>
              <div class="color-card">
                <div
                  class="color-swatch"
                  style="background: #000"
                />
                <div class="color-info">
                  <strong>Black</strong><br />
                  <code>#000000</code>
                </div>
              </div>
              <div class="color-card">
                <div
                  class="color-swatch"
                  style="background: #555"
                />
                <div class="color-info">
                  <strong>Gray Dark</strong><br />
                  <code>#555555</code>
                </div>
              </div>
              <div class="color-card">
                <div
                  class="color-swatch"
                  style="background: #d1d1d1"
                />
                <div class="color-info">
                  <strong>Gray Light</strong><br />
                  <code>#d1d1d1</code>
                </div>
              </div>
            </div>

            <h3>Spacing Scale</h3>
            <div class="spacing-scale">
              <div class="spacing-item">
                <div
                  class="spacing-visual"
                  style="width: 0.25rem; height: 0.25rem"
                />
                <code>0.25rem</code> - 4px
              </div>
              <div class="spacing-item">
                <div
                  class="spacing-visual"
                  style="width: 0.5rem; height: 0.5rem"
                />
                <code>0.5rem</code> - 8px
              </div>
              <div class="spacing-item">
                <div
                  class="spacing-visual"
                  style="width: 0.75rem; height: 0.75rem"
                />
                <code>0.75rem</code> - 12px
              </div>
              <div class="spacing-item">
                <div
                  class="spacing-visual"
                  style="width: 1rem; height: 1rem"
                />
                <code>1rem</code> - 16px
              </div>
              <div class="spacing-item">
                <div
                  class="spacing-visual"
                  style="width: 1.5rem; height: 1.5rem"
                />
                <code>1.5rem</code> - 24px
              </div>
              <div class="spacing-item">
                <div
                  class="spacing-visual"
                  style="width: 2rem; height: 2rem"
                />
                <code>2rem</code> - 32px
              </div>
            </div>

            <h3>Breakpoints</h3>
            <div class="breakpoints">
              <div class="breakpoint-item">
                <strong>Small (sm)</strong><br />
                <code>768px+</code> - Tablet and up
              </div>
              <div class="breakpoint-item">
                <strong>Large (lg)</strong><br />
                <code>1024px+</code> - Desktop and up
              </div>
              <div class="breakpoint-item">
                <strong>Extra Large (xl)</strong><br />
                <code>1200px+</code> - Large desktop and up
              </div>
            </div>
          </section>

          <!-- Typography -->
          <section id="typography">
            <h2>Typography</h2>

            <h3>Headings</h3>
            <div class="typography-scale">
              <h1 class="typography-example">H1 Heading <small>(2.5rem/3.5rem)</small></h1>
              <h2 class="typography-example">H2 Heading <small>(2rem/2.8rem)</small></h2>
              <h3 class="typography-example">H3 Heading <small>(1.75rem)</small></h3>
              <h4 class="typography-example">H4 Heading <small>(1.5rem)</small></h4>
              <h5 class="typography-example">H5 Heading <small>(1.25rem)</small></h5>
              <h6 class="typography-example">H6 Heading <small>(1rem)</small></h6>
            </div>

            <h3>Body Text</h3>
            <p class="lead">
              This is lead text that introduces content with a larger, more prominent style.
            </p>
            <p>
              This is standard paragraph text. A paragraph consists of one or more sentences dealing
              with a particular point or idea. Paragraphs are usually an expected part of formal
              writing, used to organize longer prose.
            </p>
            <p>
              <small
                >This is small text for fine print, legal text, or other less prominent
                content.</small
              >
            </p>

            <h3>Text Formatting</h3>
            <p>
              <strong>Bold text</strong> is used for emphasis and importance.<br />
              <em>Italic text</em> is used for emphasis and styling.<br />
              <u>Underlined text</u> for highlighting.<br />
              <mark>Highlighted text</mark> for marking important content.<br />
              <del>Deleted text</del> shows removed content.<br />
              <ins>Inserted text</ins> shows added content.<br />
              <code>Inline code</code> for technical references.<br />
              <kbd>Ctrl+S</kbd> for keyboard shortcuts.
            </p>

            <h3>Links</h3>
            <p>
              <a
                href="#"
                class="link"
                >Standard link</a
              ><br />
              <a
                href="#"
                class="link"
                disabled
                >Disabled link</a
              ><br />
              <a
                href="#"
                class="link-external"
                >External link</a
              >
            </p>

            <h3>Lists</h3>
            <div class="row">
              <div class="four columns">
                <h4>Unordered List</h4>
                <ul>
                  <li>First item</li>
                  <li>Second item with more content that wraps to multiple lines</li>
                  <li>Third item</li>
                  <li>
                    Nested list:
                    <ul>
                      <li>Nested item 1</li>
                      <li>Nested item 2</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="four columns">
                <h4>Ordered List</h4>
                <ol>
                  <li>First step</li>
                  <li>Second step</li>
                  <li>Third step</li>
                  <li>Final step</li>
                </ol>
              </div>
              <div class="four columns">
                <h4>Definition List</h4>
                <dl>
                  <dt>Term 1</dt>
                  <dd>Definition for term 1</dd>
                  <dt>Term 2</dt>
                  <dd>
                    Definition for term 2 with longer content that explains the concept in more
                    detail
                  </dd>
                </dl>
              </div>
            </div>

            <h3>Blockquotes</h3>
            <blockquote>
              <p>Design is not just what it looks like and feels like. Design is how it works.</p>
              <cite>Steve Jobs</cite>
            </blockquote>
          </section>

          <!-- Layout System -->
          <section id="layout">
            <h2>Layout System</h2>

            <h3>Container</h3>
            <div class="layout-demo">
              <div class="demo-container">Container (max-width: 1200px, centered)</div>
            </div>

            <h3>Grid System</h3>
            <div class="grid-demo">
              <div class="row">
                <div class="twelve columns"><div class="grid-demo-item">12 columns</div></div>
              </div>
              <div class="row">
                <div class="six columns"><div class="grid-demo-item">6 columns</div></div>
                <div class="six columns"><div class="grid-demo-item">6 columns</div></div>
              </div>
              <div class="row">
                <div class="four columns"><div class="grid-demo-item">4 columns</div></div>
                <div class="four columns"><div class="grid-demo-item">4 columns</div></div>
                <div class="four columns"><div class="grid-demo-item">4 columns</div></div>
              </div>
              <div class="row">
                <div class="three columns"><div class="grid-demo-item">3 columns</div></div>
                <div class="three columns"><div class="grid-demo-item">3 columns</div></div>
                <div class="three columns"><div class="grid-demo-item">3 columns</div></div>
                <div class="three columns"><div class="grid-demo-item">3 columns</div></div>
              </div>
            </div>
          </section>

          <!-- Forms -->
          <section id="forms">
            <h2>Form Elements</h2>

            <div class="row">
              <div class="six columns">
                <h3>Input Fields</h3>
                <form class="form-demo">
                  <label for="input-text">Text Input</label>
                  <input
                    type="text"
                    id="input-text"
                    placeholder="Enter text"
                  />

                  <label for="input-email">Email Input</label>
                  <input
                    type="email"
                    id="input-email"
                    placeholder="email@example.com"
                  />

                  <label for="input-password">Password Input</label>
                  <input
                    type="password"
                    id="input-password"
                    placeholder="Password"
                  />

                  <label for="input-search">Search Input</label>
                  <input
                    type="search"
                    id="input-search"
                    placeholder="Search..."
                  />

                  <label for="input-number">Number Input</label>
                  <input
                    type="number"
                    id="input-number"
                    placeholder="42"
                  />

                  <label for="textarea">Textarea</label>
                  <textarea
                    id="textarea"
                    rows="4"
                    placeholder="Enter your message..."
                  />
                </form>
              </div>

              <div class="six columns">
                <h3>Select & Options</h3>
                <form class="form-demo">
                  <label for="select">Select Menu</label>
                  <select id="select">
                    <option>Choose an option...</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>

                  <fieldset>
                    <legend>Radio Buttons</legend>
                    <label>
                      <input
                        type="radio"
                        name="radio-demo"
                        value="1"
                        checked
                      />
                      Option 1
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="radio-demo"
                        value="2"
                      />
                      Option 2
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="radio-demo"
                        value="3"
                      />
                      Option 3
                    </label>
                  </fieldset>

                  <fieldset>
                    <legend>Checkboxes</legend>
                    <label>
                      <input
                        type="checkbox"
                        checked
                      />
                      Checkbox 1 (checked)
                    </label>
                    <label>
                      <input type="checkbox" />
                      Checkbox 2
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        disabled
                      />
                      Checkbox 3 (disabled)
                    </label>
                  </fieldset>
                </form>
              </div>
            </div>

            <h3>Form States</h3>
            <div class="row">
              <div class="four columns">
                <label for="input-valid">Valid Input</label>
                <input
                  type="text"
                  id="input-valid"
                  class="is-valid"
                  value="Valid input"
                />
              </div>
              <div class="four columns">
                <label
                  for="input-error"
                  class="error"
                  >Error Input</label
                >
                <input
                  type="text"
                  id="input-error"
                  class="is-error"
                  placeholder="Error state"
                />
              </div>
              <div class="four columns">
                <label for="input-disabled">Disabled Input</label>
                <input
                  type="text"
                  id="input-disabled"
                  disabled
                  placeholder="Disabled"
                />
              </div>
            </div>
          </section>

          <!-- Buttons -->
          <section id="buttons">
            <h2>Buttons</h2>

            <h3>Button Types</h3>
            <div class="button-demo">
              <button class="button">Default Button</button>
              <button class="button-primary">Primary Button</button>
              <a
                href="#"
                class="button"
                >Link Button</a
              >
              <input
                type="submit"
                value="Submit Button"
              />
            </div>

            <h3>Button States</h3>
            <div class="button-demo">
              <button class="button">Normal</button>
              <button
                class="button"
                disabled
              >
                Disabled
              </button>
              <button class="button-primary">Primary Normal</button>
              <button
                class="button-primary"
                disabled
              >
                Primary Disabled
              </button>
            </div>

            <h3>Button Sizes</h3>
            <div class="button-demo">
              <button class="button button-small">Small</button>
              <button class="button">Default</button>
              <button class="button button-large">Large</button>
            </div>
          </section>

          <!-- Components -->
          <section id="components">
            <h2>Components</h2>

            <h3>Cards</h3>
            <div class="row">
              <div class="four columns">
                <div class="card">
                  <div class="card-header">
                    <h4>Card Title</h4>
                  </div>
                  <div class="card-body">
                    <p>This is a basic card component with header, body, and footer sections.</p>
                  </div>
                  <div class="card-footer">
                    <button class="button button-primary">Action</button>
                  </div>
                </div>
              </div>
              <div class="four columns">
                <div class="card card-highlighted">
                  <div class="card-body">
                    <h4>Highlighted Card</h4>
                    <p>This card has a highlighted border to draw attention.</p>
                  </div>
                </div>
              </div>
              <div class="four columns">
                <div class="card">
                  <div class="card-body">
                    <h4>Simple Card</h4>
                    <p>A minimal card with just body content.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3>Alerts</h3>
            <div class="alert alert-info">
              <strong>Info:</strong> This is an informational alert message.
            </div>
            <div class="alert alert-success">
              <strong>Success:</strong> Operation completed successfully!
            </div>
            <div class="alert alert-warning">
              <strong>Warning:</strong> Please review your input before proceeding.
            </div>
            <div class="alert alert-error">
              <strong>Error:</strong> Something went wrong. Please try again.
            </div>

            <h3>Badges & Labels</h3>
            <div class="badge-demo">
              <span class="badge">Default</span>
              <span class="badge badge-primary">Primary</span>
              <span class="badge badge-success">Success</span>
              <span class="badge badge-warning">Warning</span>
              <span class="badge badge-error">Error</span>
            </div>

            <h3>Progress Indicators</h3>
            <div class="progress-demo">
              <div class="progress-bar">
                <div
                  class="progress-fill"
                  style="width: 25%"
                >
                  25%
                </div>
              </div>
              <div class="progress-bar">
                <div
                  class="progress-fill progress-success"
                  style="width: 75%"
                >
                  75%
                </div>
              </div>
              <div class="progress-bar">
                <div
                  class="progress-fill progress-warning"
                  style="width: 50%"
                >
                  50%
                </div>
              </div>
            </div>

            <h3>Loading States</h3>
            <div class="loading-demo">
              <div class="spinner" />
              <div class="skeleton-line" />
              <div class="skeleton-line skeleton-short" />
              <div class="skeleton-circle" />
            </div>
          </section>

          <!-- Utilities -->
          <section id="utilities">
            <h2>Utility Classes</h2>

            <h3>Text Alignment</h3>
            <div class="utility-demo">
              <p class="text-left">Left aligned text</p>
              <p class="text-center">Center aligned text</p>
              <p class="text-right">Right aligned text</p>
            </div>

            <h3>Spacing Utilities</h3>
            <div class="utility-demo">
              <div class="margin-demo m-1">Margin 1rem</div>
              <div class="margin-demo m-2">Margin 2rem</div>
              <div class="padding-demo p-1">Padding 1rem</div>
              <div class="padding-demo p-2">Padding 2rem</div>
            </div>

            <h3>Display Utilities</h3>
            <div class="utility-demo">
              <div class="d-block">Block element</div>
              <span class="d-inline-block">Inline-block</span>
              <span class="d-inline-block">Inline-block</span>
              <div class="d-flex">
                <div>Flex item 1</div>
                <div>Flex item 2</div>
              </div>
            </div>
          </section>

          <!-- Interactive States -->
          <section id="states">
            <h2>Interactive States</h2>

            <h3>Hover Effects</h3>
            <div class="hover-demo">
              <div class="hover-card">Hover over me</div>
              <button class="hover-button">Hover Button</button>
              <a
                href="#"
                class="hover-link"
                >Hover Link</a
              >
            </div>

            <h3>Focus States</h3>
            <div class="focus-demo">
              <input
                type="text"
                placeholder="Focus this input"
              />
              <button>Focus this button</button>
              <a href="#">Focus this link</a>
            </div>

            <h3>Active States</h3>
            <div class="active-demo">
              <button class="active-button">Click and hold</button>
              <a
                href="#"
                class="active-link"
                >Click this link</a
              >
            </div>
          </section>

          <!-- Media Examples -->
          <section id="media">
            <h2>Media Elements</h2>

            <h3>Images</h3>
            <div class="row">
              <div class="four columns">
                <h4>Responsive Image</h4>
                <img
                  src="https://via.placeholder.com/300x200/0066cc/ffffff?text=Responsive"
                  alt="Responsive image"
                  class="responsive-image"
                />
              </div>
              <div class="four columns">
                <h4>Rounded Image</h4>
                <img
                  src="https://via.placeholder.com/200x200/555/ffffff?text=Round"
                  alt="Rounded image"
                  class="rounded-image"
                />
              </div>
              <div class="four columns">
                <h4>Circle Image</h4>
                <img
                  src="https://via.placeholder.com/150x150/0066cc/ffffff?text=Circle"
                  alt="Circle image"
                  class="circle-image"
                />
              </div>
            </div>

            <h3>Tables</h3>
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>john@example.com</td>
                  <td>Admin</td>
                  <td><span class="badge badge-success">Active</span></td>
                  <td>
                    <button class="button button-small">Edit</button>
                    <button class="button button-small">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>jane@example.com</td>
                  <td>User</td>
                  <td><span class="badge badge-warning">Pending</span></td>
                  <td>
                    <button class="button button-small">Edit</button>
                    <button class="button button-small">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Bob Johnson</td>
                  <td>bob@example.com</td>
                  <td>User</td>
                  <td><span class="badge badge-error">Inactive</span></td>
                  <td>
                    <button class="button button-small">Edit</button>
                    <button class="button button-small">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
  // Component logic can go here if needed for interactive demos
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
  // Style Guide specific styles
  .style-guide {
    .intro {
      margin-bottom: 3rem;
      text-align: center;

      .lead {
        margin-bottom: 2rem;
        font-size: 1.25rem;
        color: #666;
      }
    }

    .style-nav {
      padding: 1.5rem;
      margin-bottom: 3rem;
      background: #f8f9fa;
      border-radius: 8px;

      .style-nav-links {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 1rem;

        a {
          padding: 0.5rem 1rem;
          color: #06c;
          text-decoration: none;
          background: white;
          border: 1px solid #ddd;
          border-radius: 4px;

          /* stylelint-disable-next-line max-nesting-depth */
          &:hover {
            color: white;
            background: #06c;
          }
        }
      }
    }

    // Design Tokens
    .color-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .color-card {
      overflow: hidden;
      border: 1px solid #ddd;
      border-radius: 8px;

      .color-swatch {
        width: 100%;
        height: 80px;
      }

      .color-info {
        padding: 1rem;
        font-size: 0.9rem;
      }
    }

    .spacing-scale {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      margin-bottom: 2rem;

      .spacing-item {
        display: flex;
        gap: 1rem;
        align-items: center;

        .spacing-visual {
          background: #06c;
          border-radius: 2px;
        }
      }
    }

    .breakpoints {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;

      .breakpoint-item {
        padding: 1rem;
        background: #f8f9fa;
        border-left: 4px solid #06c;
        border-radius: 8px;
      }
    }

    // Typography
    .typography-scale {
      margin-bottom: 2rem;

      .typography-example {
        margin-bottom: 1rem;

        small {
          font-size: 0.8rem;
          font-weight: normal;
          color: #666;
        }
      }
    }

    // Layout
    .layout-demo {
      margin-bottom: 2rem;

      .demo-container {
        max-width: 1200px;
        padding: 2rem;
        margin: 0 auto;
        text-align: center;
        background: #f8f9fa;
        border: 2px dashed #06c;
      }
    }

    .grid-demo {
      margin-bottom: 2rem;

      .grid-demo-item {
        padding: 1rem;
        text-align: center;
        background: #e3f2fd;
        border: 1px solid #06c;
        border-radius: 4px;
      }
    }

    // Components
    .button-demo {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .card {
      margin-bottom: 2rem;
      overflow: hidden;
      border: 1px solid #ddd;
      border-radius: 8px;

      &.card-highlighted {
        border-color: #06c;
        box-shadow: 0 0 0 1px rgb(0 102 204 / 20%);
      }

      .card-header {
        padding: 1rem;
        background: #f8f9fa;
        border-bottom: 1px solid #ddd;

        h4 {
          margin: 0;
        }
      }

      .card-body {
        padding: 1rem;
      }

      .card-footer {
        padding: 1rem;
        background: #f8f9fa;
        border-top: 1px solid #ddd;
      }
    }

    .alert {
      padding: 1rem;
      margin-bottom: 1rem;
      border-left: 4px solid;
      border-radius: 4px;

      &.alert-info {
        color: #0d47a1;
        background: #e3f2fd;
        border-color: #06c;
      }

      &.alert-success {
        color: #2e7d32;
        background: #e8f5e8;
        border-color: #4caf50;
      }

      &.alert-warning {
        color: #ef6c00;
        background: #fff3e0;
        border-color: #ff9800;
      }

      &.alert-error {
        color: #c62828;
        background: #ffebee;
        border-color: #f44336;
      }
    }

    .badge-demo {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .badge {
      display: inline-block;
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
      font-weight: 500;
      color: white;
      background: #6c757d;
      border-radius: 4px;

      &.badge-primary {
        background: #06c;
      }

      &.badge-success {
        background: #4caf50;
      }

      &.badge-warning {
        background: #ff9800;
      }

      &.badge-error {
        background: #f44336;
      }
    }

    .progress-demo {
      margin-bottom: 2rem;

      .progress-bar {
        position: relative;
        height: 2rem;
        margin-bottom: 1rem;
        overflow: hidden;
        background: #f0f0f0;
        border-radius: 4px;

        .progress-fill {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          font-size: 0.875rem;
          font-weight: 500;
          color: white;
          background: #06c;
          transition: width 0.3s ease;

          /* stylelint-disable-next-line max-nesting-depth */
          &.progress-success {
            background: #4caf50;
          }

          /* stylelint-disable-next-line max-nesting-depth */
          &.progress-warning {
            background: #ff9800;
          }
        }
      }
    }

    .loading-demo {
      display: flex;
      gap: 2rem;
      align-items: center;
      margin-bottom: 2rem;

      .spinner {
        width: 2rem;
        height: 2rem;
        border: 3px solid #f3f3f3;
        border-top: 3px solid #06c;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      .skeleton-line {
        width: 200px;
        height: 1rem;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        border-radius: 4px;
        animation: skeleton 1.5s infinite;

        &.skeleton-short {
          width: 100px;
        }
      }

      .skeleton-circle {
        width: 3rem;
        height: 3rem;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        border-radius: 50%;
        animation: skeleton 1.5s infinite;
      }
    }

    // Utilities
    .utility-demo {
      margin-bottom: 2rem;

      .margin-demo {
        display: inline-block;
        background: #e3f2fd;
        border: 1px dashed #06c;

        &.m-1 {
          margin: 1rem;
        }
        &.m-2 {
          margin: 2rem;
        }
      }

      .padding-demo {
        display: inline-block;
        background: #fff3e0;
        border: 1px solid #ff9800;

        &.p-1 {
          padding: 1rem;
        }
        &.p-2 {
          padding: 2rem;
        }
      }
    }

    // Interactive States
    .hover-demo {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;

      .hover-card {
        padding: 1rem;
        cursor: pointer;
        background: #f8f9fa;
        border: 1px solid #ddd;
        border-radius: 4px;
        transition: all 0.3s ease;

        &:hover {
          color: white;
          background: #06c;
          box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
          transform: translateY(-2px);
        }
      }
    }

    // Media
    .responsive-image {
      max-width: 100%;
      height: auto;
      border-radius: 4px;
    }

    .rounded-image {
      border-radius: 8px;
    }

    .circle-image {
      border-radius: 50%;
    }

    .table {
      width: 100%;
      margin-bottom: 2rem;
      border-collapse: collapse;

      th,
      td {
        padding: 0.75rem;
        text-align: left;
        border-bottom: 1px solid #ddd;
      }

      th {
        font-weight: 600;
        background: #f8f9fa;
      }

      tbody tr:hover {
        background: #f8f9fa;
      }
    }

    // Button sizes
    .button-small {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    }

    .button-large {
      padding: 1rem 1.5rem;
      font-size: 1.125rem;
    }

    // Utility classes
    .text-left {
      text-align: left;
    }
    .text-center {
      text-align: center;
    }
    .text-right {
      text-align: right;
    }
    .d-block {
      display: block;
    }
    .d-inline-block {
      display: inline-block;
    }
    .d-flex {
      display: flex;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes skeleton {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }
  }
</style>
