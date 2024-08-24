<?php

namespace App\Policies;

use App\Models\User;
use App\Models\ResourceType;
use Illuminate\Auth\Access\HandlesAuthorization;

class ResourceTypePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('view_any_');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, ResourceType $resourceType): bool
    {
        return $user->can('view_');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('create_');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, ResourceType $resourceType): bool
    {
        return $user->can('update_');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, ResourceType $resourceType): bool
    {
        return $user->can('delete_');
    }

    /**
     * Determine whether the user can bulk delete.
     */
    public function deleteAny(User $user): bool
    {
        return $user->can('delete_any_');
    }

    /**
     * Determine whether the user can permanently delete.
     */
    public function forceDelete(User $user, ResourceType $resourceType): bool
    {
        return $user->can('force_delete_');
    }

    /**
     * Determine whether the user can permanently bulk delete.
     */
    public function forceDeleteAny(User $user): bool
    {
        return $user->can('force_delete_any_');
    }

    /**
     * Determine whether the user can restore.
     */
    public function restore(User $user, ResourceType $resourceType): bool
    {
        return $user->can('restore_');
    }

    /**
     * Determine whether the user can bulk restore.
     */
    public function restoreAny(User $user): bool
    {
        return $user->can('restore_any_');
    }

    /**
     * Determine whether the user can replicate.
     */
    public function replicate(User $user, ResourceType $resourceType): bool
    {
        return $user->can('replicate_');
    }

    /**
     * Determine whether the user can reorder.
     */
    public function reorder(User $user): bool
    {
        return $user->can('reorder_');
    }
}
