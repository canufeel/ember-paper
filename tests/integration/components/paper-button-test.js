import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('paper-button', 'Integration | Component | paper button', {
  integration: true
});

test('renders block label', function(assert) {
  this.render(hbs`
    {{#paper-button}}
      Block label
    {{/paper-button}}
  `);
  assert.equal(this.$('button').text().trim(), 'Block label');
});

test('renders inline label', function(assert) {
  this.render(hbs`
    {{paper-button label='Inline label'}}
  `);
  assert.equal(this.$('button').text().trim(), 'Inline label');
});

test('renders type button by default', function(assert) {
  this.render(hbs`
    {{paper-button label='Inline label'}}
  `);
  assert.equal(this.$('button').attr('type'), 'button');
});

test('triggers onClick function when attribute is present', function(assert) {
  assert.expect(1);

  this.set('foo', () => {
    assert.ok(true);
  });
  this.render(hbs`
    {{#paper-button onClick=foo}}
      A label
    {{/paper-button}}
  `);
  this.$('.md-button').click();
});

test('does nothing onClick if attribute is not present', function(assert) {
  assert.expect(0);

  this.render(hbs`
    {{#paper-button}}
      A label
    {{/paper-button}}
  `);
  this.$('.md-button').click();
});

test('uses md-raised class when raised=true', function(assert) {
  this.render(hbs`
    {{#paper-button raised=true}}
      A label
    {{/paper-button}}
  `);
  assert.ok(this.$('.md-button').hasClass('md-raised'));
});

test('uses md-icon-button class when iconButton=true', function(assert) {
  this.render(hbs`
    {{#paper-button iconButton=true}}
      A label
    {{/paper-button}}
  `);
  assert.ok(this.$('.md-button').hasClass('md-icon-button'));
});
