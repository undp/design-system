# GitHub Actions Workflow for Figma Token Integration

This document explains the automated workflow for syncing design tokens from Figma to Storybook using GitHub Actions.

## Overview

The Figma token integration uses a dedicated GitHub Actions workflow that automatically processes token updates when they are pushed to the repository. This provides a seamless, automated pipeline from Figma design changes to Storybook implementation.

## Workflow Strategy

### Recommended Approach: Protected Branch with Automated PR

We use a **dedicated branch strategy** for optimal control and review:

```
Figma Export → update-figma-tokens branch → Automated Sync → PR to develop → Review & Merge
```

**Benefits:**
- ✅ **Controlled updates**: Changes go through PR review process
- ✅ **Automated processing**: Token sync runs automatically
- ✅ **Safe integration**: Changes are validated before merging
- ✅ **Audit trail**: Clear history of token updates
- ✅ **Rollback capability**: Easy to revert if needed

**Alternative Approach: Workflow Dispatch**

The workflow also supports manual triggering via workflow dispatch, allowing you to:
- Run token sync on-demand
- Specify custom target branches
- Test token updates without branch restrictions

## Workflow File

**Location**: `.github/workflows/figma-token-sync.yml`

### Triggers

1. **Automatic (Push to Branch)**
   ```yaml
   on:
     push:
       branches:
         - 'update-figma-tokens'
       paths:
         - 'figma-tokens/input/tokens.json'
   ```
   Runs when `figma-tokens/input/tokens.json` is pushed to the `update-figma-tokens` branch.

2. **Manual (Workflow Dispatch)**
   ```yaml
   workflow_dispatch:
     inputs:
       target_branch:
         description: 'Target branch to create PR against'
         default: 'develop'
   ```
   Can be triggered manually from GitHub Actions UI.

## Setup Instructions

### 1. Repository Configuration

#### Create the Protected Branch

1. Go to repository **Settings** → **Branches**
2. Add a branch protection rule for `update-figma-tokens`:
   - ✅ Require pull request reviews before merging (optional)
   - ✅ Allow force pushes (for Figma integration tools)
   - ✅ Allow workflow runs

#### Configure GitHub Actions Permissions

1. Go to **Settings** → **Actions** → **General**
2. Under "Workflow permissions":
   - ✅ Select "Read and write permissions"
   - ✅ Enable "Allow GitHub Actions to create and approve pull requests"

### 2. Set Up Figma Integration

#### Option A: Manual Export (Simple)

1. Export tokens from Figma using Tokens Studio plugin
2. Save as `figma-tokens/input/tokens.json`
3. Create/checkout the `update-figma-tokens` branch:
   ```bash
   git checkout -b update-figma-tokens
   ```
4. Commit and push the token file:
   ```bash
   git add figma-tokens/input/tokens.json
   git commit -m "chore: update design tokens from Figma"
   git push origin update-figma-tokens
   ```
5. The workflow will automatically:
   - Run token sync
   - Commit the updated `_variables.scss`
   - Create a PR to `develop`

#### Option B: Automated Export (Advanced)

For fully automated token updates, integrate with Figma API:

1. **Set up Figma Personal Access Token**:
   - Go to Figma → Settings → Personal Access Tokens
   - Create a token with read access
   - Add to GitHub Secrets as `FIGMA_TOKEN`

2. **Configure Figma Tokens Studio** for GitHub sync:
   - In the plugin, go to Settings → Sync
   - Select GitHub as sync provider
   - Configure repository and branch (`update-figma-tokens`)
   - Use GitHub Personal Access Token

3. **Token changes in Figma automatically push to GitHub**, triggering the workflow

### 3. Workflow Execution

When the workflow runs, it:

1. ✅ Checks out the code
2. ✅ Installs dependencies
3. ✅ Runs `npm run tokens:sync`
4. ✅ Detects changes in `_variables.scss`
5. ✅ Commits changes (if any)
6. ✅ Creates/updates PR to `develop`
7. ✅ Validates with `npm run build`
8. ✅ Adds appropriate labels

## Workflow Steps Explained

### Token Sync Step

```yaml
- name: Run token sync
  run: |
    npm run tokens:sync
    # Detects if _variables.scss changed
```

This runs the sync script which:
- Transforms Figma tokens using Style Dictionary
- Merges with existing Storybook variables
- Creates backup of original file
- Updates `stories/assets/scss/_variables.scss`

### Automatic PR Creation

```yaml
- name: Create or update Pull Request
  uses: peter-evans/create-pull-request@v6
```

Creates a PR with:
- Clear title: "🎨 Update design tokens from Figma"
- Detailed description with review checklist
- Appropriate labels (`design-tokens`, `automated`)
- Links to documentation

### Build Validation

```yaml
- name: Build and validate
  run: npm run build
```

Ensures token changes don't break the build before creating PR.

## Usage Examples

### Manual Trigger via GitHub UI

1. Go to **Actions** tab in GitHub
2. Select "Figma Token Sync" workflow
3. Click "Run workflow"
4. Select branch: `update-figma-tokens`
5. (Optional) Specify target branch
6. Click "Run workflow"

### Manual Trigger via GitHub CLI

```bash
gh workflow run figma-token-sync.yml \
  --ref update-figma-tokens \
  -f target_branch=develop
```

### Automated Trigger via Token Push

```bash
# Export tokens from Figma to figma-tokens/input/tokens.json
git checkout update-figma-tokens
git add figma-tokens/input/tokens.json
git commit -m "chore: update tokens from Figma"
git push origin update-figma-tokens

# Workflow triggers automatically
# PR created automatically
```

## Review Process

When a PR is created, reviewers should:

1. **Review the Changes**
   - Check `stories/assets/scss/_variables.scss` diff
   - Verify Figma tokens section is updated
   - Ensure Storybook-only variables are preserved

2. **Test in Storybook**
   - Chromatic will automatically run visual regression tests
   - Review component rendering
   - Check for visual breaking changes

3. **Validate Build**
   - GitHub Actions runs build automatically
   - Check build logs for warnings/errors

4. **Approve and Merge**
   - Once validated, approve the PR
   - Merge to `develop`

## Troubleshooting

### Workflow Not Triggering

**Issue**: Workflow doesn't run when pushing to `update-figma-tokens`

**Solutions**:
1. Verify `figma-tokens/input/tokens.json` was modified
2. Check workflow file is in `.github/workflows/`
3. Ensure GitHub Actions is enabled for the repository
4. Check branch protection rules aren't blocking workflows

### PR Creation Fails

**Issue**: Workflow runs but doesn't create PR

**Solutions**:
1. Verify GitHub Actions has permission to create PRs
   - Settings → Actions → General → Workflow permissions
2. Check if PR already exists for the branch
3. Review workflow logs for error messages

### Build Validation Fails

**Issue**: Token sync succeeds but build fails

**Solutions**:
1. Review build logs in GitHub Actions
2. Check if new tokens have invalid SCSS syntax
3. Verify variable references in components still work
4. Test locally: `npm run tokens:sync && npm run build`

### No Changes Detected

**Issue**: Workflow runs but reports "No changes detected"

**Explanation**: The tokens in Figma match the current SCSS variables. This is normal and indicates tokens are already in sync.

## Security Considerations

### Secrets Management

- **GITHUB_TOKEN**: Automatically provided by GitHub Actions, no setup needed
- **FIGMA_TOKEN** (optional): For Figma API integration
  - Store as GitHub Secret
  - Never commit to repository
  - Restrict access to necessary scopes

### Branch Protection

Recommended settings for `update-figma-tokens`:
- Require status checks to pass
- Restrict who can push (if using Figma API integration)
- Allow force pushes (for Figma tools that overwrite)

### Workflow Permissions

The workflow requires:
- `contents: write` - To commit changes
- `pull-requests: write` - To create PRs

These are scoped to the workflow run and don't grant broader access.

## Monitoring and Maintenance

### Workflow Monitoring

1. **GitHub Actions Dashboard**
   - View workflow runs: Actions tab
   - Check success/failure rates
   - Review execution times

2. **Notifications**
   - Configure email notifications for workflow failures
   - Use GitHub mobile app for real-time alerts

3. **Logs**
   - All workflow runs are logged
   - Logs retained for 90 days
   - Download logs for troubleshooting

### Maintenance Tasks

- **Weekly**: Review created PRs, ensure they're merged or closed
- **Monthly**: Check workflow success rate, optimize if needed
- **Quarterly**: Review and update workflow dependencies (actions versions)

## Best Practices

1. **Regular Syncs**: Update tokens regularly (weekly recommended)
2. **Small Changes**: Sync frequently to keep changes manageable
3. **Review Thoroughly**: Always review token changes before merging
4. **Test Visually**: Use Chromatic to catch visual regressions
5. **Communicate**: Notify team when token updates are coming
6. **Document Changes**: Add context in PR descriptions about Figma changes

## Advanced Configuration

### Custom Target Branch

To create PRs against a different branch:

```yaml
workflow_dispatch:
  inputs:
    target_branch:
      default: 'main'  # Change default target
```

### Multiple Token Sources

To support multiple token files:

```yaml
on:
  push:
    paths:
      - 'tokens/figma/*.json'  # Watch multiple files
```

### Slack Notifications

Add Slack notification step:

```yaml
- name: Notify Slack
  uses: slackapi/slack-github-action@v1
  with:
    payload: |
      {
        "text": "🎨 Figma tokens updated and PR created"
      }
  env:
    SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
```

## Related Documentation

- [FIGMA_TOKENS_INTEGRATION.md](../FIGMA_TOKENS_INTEGRATION.md) - Complete integration guide
- [FIGMA_PLUGIN_SETUP.md](../FIGMA_PLUGIN_SETUP.md) - Figma plugin configuration
- [TOKENS_README.md](../TOKENS_README.md) - Token directory structure

## Support

For issues with the workflow:
1. Check workflow logs in GitHub Actions
2. Review this documentation
3. Check existing issues in the repository
4. Create a new issue with the `github-actions` label
