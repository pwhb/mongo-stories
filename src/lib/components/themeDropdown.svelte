<script>
    /**
	 * @type {any}
	 */
     export let themeDropdown
    /**
	 * @type {any}
	 */
     export let themeDropdownIcon
</script>
<div class="dropdown dropdown-end">
 
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
           
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src={themeDropdownIcon} />
        </div>
    </label>
   
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <ul
        tabindex="0"
        class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
    >
        {#each themeDropdown as dropdown}
            <li>
                <button data-set-theme={dropdown.name} data-act-class="ACTIVECLASS">
                    <img src={dropdown.icon} alt={dropdown.name} class="w-4 h-4" />
                    {dropdown.themeName}</button
                >
            </li>
        {/each}
    </ul>
</div>