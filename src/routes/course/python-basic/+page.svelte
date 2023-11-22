<script lang="ts">
  import MetaTitle from "../components/meta-title.svelte";
  import passwordConfirm from "$lib/password";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";

  if (browser) {
    if (localStorage.getItem("password") != $passwordConfirm) {
      goto("/course");
    }
  }
</script>

<MetaTitle title="Python Basic" />
