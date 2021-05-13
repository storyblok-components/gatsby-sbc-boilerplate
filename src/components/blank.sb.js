module.exports = {
  name: "blank",
  display_name: "Blank page",
  is_root: true,
  is_nestable: false,
  component_group_name: "Content type",
  schema: {
    body: {
      type: "bloks",
    },
    featured_image: {
      type: "custom",
      required: false,
      pos: 1,
      field_type: "focus-point",
      options: [],
      description: "Shown in other pages and social media"
    },
  }
};
