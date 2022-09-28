# How to open README.md in preview mode?

- in `.gitpod.yml`, in tasks:
```yaml
  - name: Open readme
    command: gp await port 23000 1>/dev/null && gp open README.md
```
- in .vscode/settings.json:
```json
{
    "workbench.editorAssociations": 
        {
            "README.md": "vscode.markdown.preview.editor",
        }
}
```

From [@julienbusset](https://github.com/julienbusset)

# How to update the Gitpod button link on README.md when someone forks my repo?

Use the following `.gitpod.yml` snippet:
```yaml
tasks:
  - name: Swap origin to our upstream(fork)
    init: |
      if upstream="$(git -C "$GITPOD_REPO_ROOT" config --get remote.upstream.url)"; then {
        origin="$(git -C "$GITPOD_REPO_ROOT" config --get remote.origin.url)";
        origin="${origin#http*://}"; origin="${origin%.git}";
        sed -i -E "s|(https?://)?${origin}(.git)?|${upstream}|g" README.md
      } fi
      exit;
```

From [@axonasif](https://github.com/axonasif)

# Gitpod browser extension alternative for safari browser

From [@Foxhoundn](https://github.com/Foxhoundn):

Hey - I’ve made a simple shortcut for anyone using MacOS & Safari as their default environments - https://www.icloud.com/shortcuts/51ad3cf5b1dc401b8e1ece4992bdff33 to make it easier to open Issues, PRs & repos in GitPod.

This shortcut Open in GitPod adds itself to the menu bar and when ran it adds your current Safari’s URL to https://gitpod.io/# thus opening a new workspace. 

It can also be ran with CTRL + SHIFT + G  but that does not seem to work for me atm.
