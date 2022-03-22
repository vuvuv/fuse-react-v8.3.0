import Button from '@mui/material/Button';
import BoardTitle from 'app/main/apps/scrumboard/board/BoardTitle';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

function BoardHeader(props) {
  return (
    <div className="p-24 sm:p-32 w-full border-b-1 flex items-center justify-between container">
      <div className="flex items-center">
        <BoardTitle />
      </div>

      <div className="flex items-center justify-end space-x-12">
        <Button
          className="whitespace-nowrap"
          variant="outlined"
          component={NavLinkAdapter}
          to="/apps/scrumboard/boards/"
          startIcon={<FuseSvgIcon size={20}>heroicons-outline:view-boards</FuseSvgIcon>}
        >
          Boards
        </Button>

        <Button
          className="whitespace-nowrap"
          variant="outlined"
          onClick={() => props.onSetSidebarOpen(true)}
          startIcon={<FuseSvgIcon size={20}>heroicons-outline:cog</FuseSvgIcon>}
        >
          Settings
        </Button>
      </div>
    </div>
  );
}

export default BoardHeader;