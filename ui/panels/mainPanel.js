module.exports = {
  data() {
    return {
      title: 'Quote System',
      description: 'Configure the Quote System'
    };
  },
  updated() {
    const $element = $(this.$el);
    $element.find('[data-tooltip]').tooltip({ delay: 1000 });
  },
  mounted() {
    this.$nextTick(() => {
      const $element = $(this.$el);

      $element.find('.collapsible').collapsible();
      $element.find('[data-tooltip]').tooltip({ delay: 1000 });
    });
  }
};